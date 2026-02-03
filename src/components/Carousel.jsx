import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Carousel = ({ className = "py-16" }) => {
  // Filter for featured projects
  const featuredProjects = projects.filter(p => p.featured);

  // Duplicate projects to ensure seamless scrolling
  // We need enough items to fill the screen twice plus some buffer
  const allProjects = [...featuredProjects, ...featuredProjects, ...featuredProjects, ...featuredProjects];

  if (featuredProjects.length === 0) return null;

  return (
    <div className={`w-full overflow-hidden bg-canvas relative group ${className}`}>
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-canvas to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-canvas to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
        {allProjects.map((project, index) => (
          <ProjectCard
            key={`${project.id}-${index}`}
            project={project}
            className="w-80 sm:w-96 flex-shrink-0 mx-4"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
