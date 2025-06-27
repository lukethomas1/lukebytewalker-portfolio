import ProjectCard from '~/components/ProjectCard';

import gluttonyImage from "/images/projects/gluttony.png";
import sand2Image from "/images/projects/sand2_256p.png";
import hightideImage from "/images/projects/hightide.png";

export default function Projects() {
  return (
    <section className="flex flex-col justify-center p-5 py-12 text-primary rounded-md shadow-sm ">
      <h2 className="text-xl font-bold mb-6">
        Featured Projects
      </h2>
      
      <div className="space-y-8">
        <ProjectCard
          title="Gluttony"
          description="Godot game written in GDScript, connects to Firebase for leaderboard integration. Used open-source Krita to create textures."
          imageUrl={gluttonyImage}
          projectUrl="https://github.com/lukethomas1/gluttony"
          technologies={[
            { name: "Godot", url: "https://godotengine.org/" },
            { name: "GDScript", url: "https://gdscript.com/" },
            { name: "Firebase", url: "https://firebase.google.com/" },
          ]}
        />

        <ProjectCard
          title="krita-tilemaps"
          description="Krita plugin for creating symmetrical tilemaps, written in Python. Edit only 5 tiles to have a completed tilemap."
          imageUrl={sand2Image}
          projectUrl="https://github.com/lukethomas1/krita-tilemaps"
          technologies={[
            { name: "Python", url: "https://www.python.org/" },
            { name: "Krita", url: "https://krita.org/en/" },
          ]}
        />

        <ProjectCard
          title="HighTide"
          description="Godot tech demo written in C# combining dual-grid tilemaps with procedural terrain generation. Additionally, has working peer-to-peer multiplayer."
          imageUrl={hightideImage}
          projectUrl="https://github.com/lukethomas1/HighTide"
          technologies={[
            { name: "Godot", url: "https://godotengine.org/" },
            { name: "C#", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
          ]}
        />
      </div>
    </section>
  );
}