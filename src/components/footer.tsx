"use client";

import { Icons } from "./icons";

export default function Footer() {
  return (
    <footer className="mt-10 py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="dark:lightmode-red flex items-center space-x-2 text-lightmode-red">
            <Icons.logo className="h-6 w-6" />
          </div>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/johnnguyencodes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Icons.linkedIn className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
            </a>
            <a href="https://github.com/johnnguyencodes">
              <Icons.gitHub className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
