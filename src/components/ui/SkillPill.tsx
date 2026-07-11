export default function SkillPill({ name }: { name: string }) {
  return (
    <div className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-default">
      {name}
    </div>
  );
}
