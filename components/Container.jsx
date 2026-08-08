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
        "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all",
      )}
    >
      <span className="capsize">{text}</span>
    </NextLink>
  );
}

export default function Container({ children }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <main
        id="skip"
        className="flex flex-col justify-center px-5 pt-12 md:pt-24 bg-gray-50 dark:bg-gray-900"
      >
        {children}
      </main>
    </div>
  );
}
