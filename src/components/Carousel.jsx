import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowRight } from 'lucide-react';

const Carousel = () => {
  // Duplicate projects to ensure seamless scrolling
  // We need enough items to fill the screen twice plus some buffer
  const allProjects = [...projects, ...projects, ...projects, ...projects];

  return (
    <div className="w-full overflow-hidden py-16 bg-canvas relative group">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-canvas to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-canvas to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
        {allProjects.map((project, index) => (
          <ProjectCard key={`${project.id}-${index}`} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => (
  <Link
    to={`/projects/${project.id}`}
    className="block w-80 sm:w-96 flex-shrink-0 mx-4 group/card focus:outline-none"
  >
    <div className="bg-surface rounded-xl overflow-hidden shadow-sm border border-base transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1 relative h-full flex flex-col">
      <div className="h-48 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-primary mb-2 group-hover/card:text-primary-600 transition-colors">{project.title}</h3>
        <p className="text-sm text-secondary line-clamp-2 mb-4 flex-grow">{project.description}</p>

        <div className="flex items-center text-primary-600 text-sm font-medium mt-auto">
          <span>View Details</span>
          <ArrowRight size={16} className="ml-1 transition-transform group-hover/card:translate-x-1" />
        </div>
      </div>

      {/* Optical Border */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none" />
    </div>
  </Link>
);

export default Carousel;
