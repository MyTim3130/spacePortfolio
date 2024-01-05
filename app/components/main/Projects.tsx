import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h2>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="This is a portfolio website designed with a space theme, offering a unique and immersive experience to its visitors. The website uses a dark, starry background interspersed with vibrant nebulae and celestial bodies, creating a cosmic journey through the user's professional achievements and skills."
        />
      </div>
    </div>
  );
};

export default Projects;
