import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const bodyText = await request.text();
    let body;
    try {
      body = JSON.parse(bodyText);
    } catch (e) {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      return NextResponse.json(
        { error: 'Server configuration error: WEB3FORMS_ACCESS_KEY is missing' },
        { status: 500 }
      );
    }

    // Call Web3Forms API to send an email
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name,
        email: email,
        message: message,
        subject: `New Portfolio Contact from ${name}`,
        from_name: "Portfolio Website",
      }),
    });

    const responseText = await response.text();
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      return NextResponse.json({ error: `Web3Forms returned non-JSON: ${responseText.substring(0, 100)}` }, { status: 500 });
    }

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: data.message || 'Failed to send message' },
        { status: 500 }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { error: `Internal server error: ${error.message}` },
      { status: 500 }
    );
  }
}
