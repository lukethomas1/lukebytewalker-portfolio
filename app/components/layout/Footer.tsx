import React from "react";

export default function Footer() {
  return (
    <footer className="hidden w-full py-6 px-4 bg-gray-100 dark:bg-gray-800 rounded-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} Luke Thomas. All rights reserved.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex space-x-4">
            <a href="https://github.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              GitHub
            </a>
            <a href="https://linkedin.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              LinkedIn
            </a>
            <a href="mailto:contact@example.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              Contact
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        This site was made with <a href="https://remix.run" className="text-blue-500 hover:underline">Remix</a>
      </div>
    </footer>
  );
}