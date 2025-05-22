import React from 'react';
import ProjectCard from '~/components/ProjectCard';
export default function Projects() {
  return (
    <section className="flex flex-col justify-center p-5 py-12 text-gray-300 rounded-md shadow-sm ">
      <h2 className="text-xl font-bold mb-6 text-white">
        <span className="text-[#64ffda] font-mono text-base mr-2">03.</span>
        Featured Projects
      </h2>
      
      <div className="space-y-8">
        <ProjectCard
          title="Gluttony"
          description="Godot game written in GDScript, connects to Firebase for leaderboard integration. Used open-source Krita to create textures."
          imageUrl="/public/images/projects/gluttony.png"
          projectUrl="https://lukebytewalker.com/projects/gluttony"
          technologies={[
            { name: "Godot", url: "https://reactjs.org" },
            { name: "GDScript", url: "https://expressjs.com" },
            { name: "Firebase", url: "https://expressjs.com" },
          ]}
        />

        <ProjectCard
          title="krita-tilemaps"
          description="Krita plugin for creating symmetrical tilemaps, written in Python. Edit only 5 tiles to have a completed tilemap."
          imageUrl="/public/images/projects/sand2_256p.png"
          projectUrl="https://example.com/spotify-profile"
          technologies={[
            { name: "Python", url: "https://reactjs.org" },
            { name: "Krita", url: "https://developer.spotify.com/documentation/web-api/" },
          ]}
        />
      </div>
    </section>
  );
}