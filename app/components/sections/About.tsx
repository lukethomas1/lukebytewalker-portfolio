import React from "react";

export default function About() {
  return (
    <div className="space-y-3">
      <h1 className="text-6xl font-bold text-primary">
        Luke Thomas
      </h1>
      <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">Professional full-stack software developer</p>
      <p className="text-secondary">
        Passionate about building scalable and maintainable applications with modern technologies, always eager to learn and embrace new challenges.
      </p>
      {/* Add this test element */}
      <div className="hidden p-4 bg-secondary text-secondary-foreground border rounded">
        Test: This should change color in dark mode
      </div>
    </div>
  );
}