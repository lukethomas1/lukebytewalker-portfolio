import React from "react";

export default function Education() {
  return (
    <section className="p-6 rounded-md shadow-sm">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold mb-3 text-white">
          <span className="text-[#64ffda] font-mono text-base mr-2">02.</span>
          Education
        </h2>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">University of California, San Diego</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">2015-2020</span>
        </div>
        <div className="flex justify-between space-x-2">
          <p className="text-lg text-gray-700 dark:text-gray-300">B.S. Computer Engineering</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            GPA: 3.907 <span className="text-xs">(upper division)</span>
          </p>
        </div>
      </div>
    </section>
  );
}