import cn from "classnames";
import Image from "next/image";
import { HiCode, HiDocumentText, HiExternalLink } from "react-icons/hi";

export default function ProjectCard({
  name,
  desc,
  logo,
  url,
  github_url,
  doc_url,
  tech,
  gradient,
}) {
  return (
    <div
      className={cn(
        "",
        "rounded-lg bg-gradient-to-r p-1 mt-4 w-full",
        gradient
      )}
    >
      <div className="w-full h-full bg-white rounded-lg p-4">
        {logo && (
          <div className="relative w-full h-[230px] hidden sm:block">
            <Image
              src={logo}
              alt={name}
              fill
              sizes={30}
              className="object-contain rounded-lg"
              priority
            />
          </div>
        )}

        <div className="mt-4">
          <h3 className="font-bold text-xl md:text-3xl tracking-tight mb-6 bg-gradient-to-r from-[#000000] via-[#888888] to-[#000000] bg-clip-text text-transparent truncate">
            {name}
          </h3>
          <p className="mt-2 text-secondary whitespace-pre-line text-gray-600 dark:text-gray-400">
            {desc}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {github_url && (
            <a
              href={github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <HiCode
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
                size="2em"
                color="#181717"
              />
            </a>
          )}

          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <HiExternalLink
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
                size="2em"
              />
            </a>
          )}

          {doc_url && (
            <a href={doc_url} target="_blank" rel="noopener noreferrer">
              <HiDocumentText
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
                size="2em"
              />
            </a>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t, index) => (
            <p key={index} className="text-[14px]">
              #{t}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
