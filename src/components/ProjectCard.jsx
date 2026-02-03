import { Link } from 'react-router-dom';
import { ArrowRight, Cpu } from 'lucide-react';

const ProjectCard = ({ project, className = "" }) => (
  <Link
    to={`/projects/${project.id}`}
    className={`block group relative ${className}`}
  >
    {/* Holographic Container */}
    <div className="h-full tech-card-container hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/20">

      {/* Image Section with Scanline Overlay */}
      <div className="h-48 overflow-hidden relative border-b border-white/5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />

        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col h-[calc(100%-12rem)] relative z-20">
        <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent-500 bg-accent-500/10 px-2 py-1 rounded border border-accent-500/20 backdrop-blur-sm">
                {project.category}
            </span>
            <Cpu size={14} className="text-primary-500 opacity-50 group-hover:animate-pulse" />
        </div>

        <h3 className="font-mono text-lg font-bold text-primary mb-2 group-hover:text-accent-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-sm text-secondary line-clamp-2 mb-6 flex-grow leading-relaxed group-hover:text-gray-300 transition-colors">
          {project.description}
        </p>

        <div className="font-mono flex items-center text-primary-400 text-xs font-bold uppercase tracking-wider mt-auto group-hover:text-accent-400 transition-colors">
          <span>Initialize</span>
          <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>

      {/* Tech Borders (Animated via CSS in index.css) */}
      <div className="tech-border absolute inset-0 rounded-xl pointer-events-none" />

      {/* Corner Glows */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500 pointer-events-none" />
    </div>
  </Link>
);

export default ProjectCard;
