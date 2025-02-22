import Link from "next/link";

export default function SkillCard({ title, projects }) {
  return (
    <div className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900">
      <h3 className="text-lg font-bold text-left my-2 text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <div className="flex flex-wrap">
        {projects &&
          projects.map((p, index) => (
            <Link
              key={index}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs border px-2 mr-2 mb-2 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 hover:border-gray-800 dark:hover:gray-200 transition-all"
            >
              {p.name}
            </Link>
          ))}
      </div>
    </div>
  );
}
