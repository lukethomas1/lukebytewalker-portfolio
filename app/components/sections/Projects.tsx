import React, { useRef, useEffect, useState } from "react";
import { Link } from "@remix-run/react";

// Sample project data
const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    description: "A machine learning platform that analyzes customer data to provide actionable insights for e-commerce businesses.",
    image: "https://placehold.co/800x400/0a192f/ffffff?text=AI+Analytics",
    tags: [
      { name: "React", url: "https://reactjs.org" },
      { name: "Python", url: "https://python.org" },
      { name: "TensorFlow", url: "https://tensorflow.org" },
      { name: "AWS", url: "https://aws.amazon.com" }
    ],
  },
  {
    id: 2,
    title: "Sustainable Smart Home System",
    description: "IoT ecosystem for energy-efficient home management with real-time monitoring and automated optimization.",
    image: "https://placehold.co/800x400/0a192f/ffffff?text=Smart+Home",
    tags: [
      { name: "IoT", url: "https://en.wikipedia.org/wiki/Internet_of_things" },
      { name: "React Native", url: "https://reactnative.dev" },
      { name: "Node.js", url: "https://nodejs.org" },
      { name: "MongoDB", url: "https://mongodb.com" }
    ],
  },
  {
    id: 3,
    title: "Blockchain Supply Chain Tracker",
    description: "Decentralized application for transparent supply chain management with immutable tracking records.",
    image: "https://placehold.co/800x400/0a192f/ffffff?text=Blockchain+Tracker",
    tags: [
      { name: "Solidity", url: "https://soliditylang.org" },
      { name: "Ethereum", url: "https://ethereum.org" },
      { name: "Web3.js", url: "https://web3js.readthedocs.io" },
      { name: "Next.js", url: "https://nextjs.org" }
    ],
  },
  {
    id: 4,
    title: "Augmented Reality Navigation",
    description: "Mobile application providing AR-enhanced navigation for complex indoor environments like museums and shopping centers.",
    image: "https://placehold.co/800x400/0a192f/ffffff?text=AR+Navigation",
    tags: [
      { name: "Swift", url: "https://swift.org" },
      { name: "ARKit", url: "https://developer.apple.com/augmented-reality" },
      { name: "Core ML", url: "https://developer.apple.com/machine-learning" },
      { name: "Firebase", url: "https://firebase.google.com" }
    ],
  },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  
  // Auto-scrolling effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let rafId: number;
    let lastTime = 0;
    const SCROLL_SPEED = 0.5; // pixels per ms
    
    const scroll = (timestamp: number) => {
      if (isPaused) {
        lastTime = timestamp;
        rafId = requestAnimationFrame(scroll);
        return;
      }
      
      if (lastTime) {
        const delta = timestamp - lastTime;
        scrollContainer.scrollTop += SCROLL_SPEED * delta;
        
        // Reset to top when reaching bottom
        if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
          scrollContainer.scrollTop = 0;
        }
      }
      
      lastTime = timestamp;
      rafId = requestAnimationFrame(scroll);
    };
    
    rafId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [isPaused]);
  
  // Snap to nearest card when paused
  useEffect(() => {
    if (!isPaused || !scrollRef.current) return;
    
    const scrollContainer = scrollRef.current;
    const cardHeight = scrollContainer.scrollHeight / projects.length;
    const currentPosition = scrollContainer.scrollTop;
    const targetIndex = Math.round(currentPosition / cardHeight);
    const targetPosition = targetIndex * cardHeight;
    
    setActiveCardIndex(targetIndex);
    
    scrollContainer.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }, [isPaused]);
  
  // Handle tag click - prevent propagation to card
  const handleTagClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };
  
  return (
    <section className="p-5 text-gray-300 rounded-md shadow-sm h-full">
      <h2 className="text-xl font-bold mb-4 text-white">
        <span className="text-[#64ffda] font-mono text-base mr-2">02.</span>
        Featured Projects
      </h2>
      
      <div 
        ref={scrollRef}
        className="h-[calc(100%-3rem)] overflow-y-auto snap-y snap-mandatory"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="mb-6 rounded-lg overflow-hidden shadow-lg relative h-72 snap-start cursor-pointer transition-all duration-300 hover:shadow-xl"
            onClick={() => console.log(`Navigate to project ${project.id}`)}
          >
            {/* Background image */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
            
            {/* Content overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-200 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <a 
                    key={index}
                    href={tag.url}
                    onClick={(e) => handleTagClick(e, tag.url)}
                    className="px-3 py-1 bg-gray-800/60 text-gray-200 text-sm rounded-full hover:bg-[#64ffda]/30 hover:text-[#64ffda] transition-colors"
                  >
                    {tag.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}