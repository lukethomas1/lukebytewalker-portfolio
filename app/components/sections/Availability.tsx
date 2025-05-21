import React from "react";

export default function Availability() {
  return (
    <section className="p-6 pt-0 rounded-md shadow-sm">
      <h2 className="text-xl font-bold mb-6 text-white">
        <div className="flex flex-row justify-between">
          <div>
            <span className="text-[#64ffda] font-mono text-base mr-2">04.</span>
            Get In Touch
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500"/>
            <span className="text-sm text-emerald-500">Available for work</span>
          </div>
        </div>
      </h2>
      
      <div className="text-center py-2">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          I'm currently open to full-time positions, contract work, and freelance opportunities.
        </p>
        
      </div>
    </section>
  );
}