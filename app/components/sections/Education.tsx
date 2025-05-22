import React from "react";

export default function Education() {
  return (
    <section className="p-6 rounded-md shadow-sm">
      <div className="space-y-2">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">University of California, San Diego</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-2">2015-2020</span>
        </div>
        <div className="flex justify-between space-x-2">
          <p className="text-lg text-gray-700 dark:text-gray-300">B.S. Computer Engineering</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            GPA: 3.907 <span className="text-xs">(upper division)</span>
          </p>
        </div>
      </div>
    </section>
  );
}