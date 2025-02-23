import Link from "next/link";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            About
          </Link>
          <Link
            href="/skills"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Projects
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://www.linkedin.com/in/vaibhav-kesharwani">
            Linkedin
          </ExternalLink>
          <ExternalLink href="https://github.com/vaibbhavk">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://kaggle.com/vaibhavk2128">
            Kaggle
          </ExternalLink>
          <ExternalLink href="https://leetcode.com/u/vaibbhavk">
            LeetCode
          </ExternalLink>
          <ExternalLink href="https://drive.google.com/drive/folders/167F2LSfuEwrN3rEMzVGi2B8N2CV1Xt_Z?usp=sharing">
            Resume
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://www.fiverr.com/vaibbhavvk?public_mode=true">
            Fiverr
          </ExternalLink>
          <ExternalLink href="https://www.upwork.com/freelancers/~01e98ab6fa7c516372">
            Upwork
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
