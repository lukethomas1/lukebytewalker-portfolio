import React from "react";

export default function Availability() {
  return (
    <section className="p-6 rounded-md shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        <span className="text-[#64ffda] font-mono text-base mr-2">03.</span>
        Availability
      </h2>
      
      <div className="text-center py-6">
        <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 font-medium rounded-full mb-3">
          Currently Available
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          I'm open to full-time positions, contract work, and freelance opportunities.
        </p>
        
        <button type="button" className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
          Contact Me
        </button>
      </div>
    </section>
  );
}