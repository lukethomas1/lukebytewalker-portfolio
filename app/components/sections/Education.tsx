import React from "react";

export default function Education() {
  return (
    <section className="p-6 rounded-md shadow-sm">
      <div className="space-y-2">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold text-primary">University of California, San Diego</h3>
          <span className="text-sm text-secondary mt-2">2015-2020</span>
        </div>
        <div className="flex justify-between space-x-2">
          <p className="text-lg text-secondary">B.S. Computer Engineering</p>
          <p className="text-sm text-secondary mt-2">
            GPA: 3.907 <span className="text-xs">(upper division)</span>
          </p>
        </div>
      </div>
    </section>
  );
}