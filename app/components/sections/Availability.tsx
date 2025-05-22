import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Availability() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    // For example, send data to an API endpoint
    console.log("Form submitted");
  };

  return (
    <section className="p-6 rounded-md shadow-sm">
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

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input 
          placeholder="Email Address" 
          type="email" 
          required
          className="w-full"
        />
        <Textarea 
          placeholder="Message"
          rows={4}
          className="w-full resize-none"
        />
        <div className="flex justify-end">
          <Button type="submit" variant="default" className="bg-emerald-600 hover:bg-emerald-700">
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
}