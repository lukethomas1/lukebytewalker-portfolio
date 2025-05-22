"use client";

import { Github, Linkedin, Code2 } from "lucide-react";
import { cn } from "~/lib/utils";

export function SocialLinks() {
  return (
    <div className="fixed bottom-8 left-8 flex flex-col gap-4">
      <a
        href="https://github.com/lukethomas1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground transition-all duration-200 hover:scale-110 hover:text-card-foreground"
      >
        <Github className="h-5 w-5" />
      </a>
      <a
        href="https://linkedin.com/in/lukethethomas"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground transition-all duration-200 hover:scale-110 hover:text-card-foreground"
      >
        <Linkedin className="h-5 w-5" />
      </a>
      <a
        href="https://github.com/lukethomas1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground transition-all duration-200 hover:scale-110 hover:text-card-foreground"
      >
        <Code2 className="h-5 w-5" />
      </a>
    </div>
  );
}