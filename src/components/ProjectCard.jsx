import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, className = "" }) => (
  <Link
    to={`/projects/${project.id}`}
    className={`block group/card focus:outline-none ${className}`}
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
        <div className="mb-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 dark:bg-primary-900/20 px-2 py-0.5 rounded border border-primary-100 dark:border-primary-800/30">
                {project.category}
            </span>
        </div>
        <h3 className="font-mono text-lg font-bold text-primary mb-2 group-hover/card:text-primary-600 transition-colors">{project.title}</h3>
        <p className="text-sm text-secondary line-clamp-2 mb-4 flex-grow">{project.description}</p>

        <div className="font-mono flex items-center text-primary-600 text-sm font-medium mt-auto">
          <span>View Details</span>
          <ArrowRight size={16} className="ml-1 transition-transform group-hover/card:translate-x-1" />
        </div>
      </div>

      {/* Optical Border */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none" />
    </div>
  </Link>
);

export default ProjectCard;
