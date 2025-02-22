"use client";

import { usePathname } from "next/navigation";
import NextLink from "next/link";
import cn from "classnames";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";
import Link from "next/link";
import Image from "next/image";

function NavItem({ href, text, target }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NextLink
      href={href}
      target={target}
      className={cn(
        isActive
          ? "font-semibold text-gray-800 dark:text-gray-200"
          : "font-normal text-gray-600 dark:text-gray-400",
        "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
      )}
    >
      <span className="capsize">{text}</span>
    </NextLink>
  );
}

export default function Container({ children }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col justify-center px-5">
        <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>

          <Link href="/">
            <Image
              src="/vk.png"
              alt="VK"
              width={50}
              height={50}
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          <p className="flex-1"></p>
          <div className="ml-[-0.60rem]">
            <MobileMenu />
            <NavItem href="/" text="About" />
            <NavItem href="/skills" text="Skills" />
            <NavItem href="/projects" text="Projects" />
            <NavItem
              href="https://drive.google.com/drive/folders/167F2LSfuEwrN3rEMzVGi2B8N2CV1Xt_Z?usp=sharing"
              target="_black"
              text="Resume"
            />
          </div>
        </nav>
      </div>
      <main
        id="skip"
        className="flex flex-col justify-center px-5 bg-gray-50 dark:bg-gray-900"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
