import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-indigo-500/30 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-indigo-500/10 dark:hover:border-indigo-500/30">
      {/* Optical Highlight */}
      <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-black/5 dark:ring-white/10"></div>

      {/* Image (Placeholder or Real) */}
      {/* Enforce fixed height for image container in carousel context by strictly defining height or aspect ratio.
          'h-48' (12rem) is a standard fixed height that ensures alignment regardless of width.
          Alternatively, strictly respecting 'aspect-video' works if widths are identical.
          Given 'min-w-[300px]' in Carousel, the widths are similar but can flex.
          To be absolutely safe for alignment, a fixed height is preferred if widths vary slightly,
          but here widths are 'min-w' so they might stretch.
          Let's stick to aspect-video but ensure the container doesn't collapse. */}
      <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
         {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
         ) : (
            <div className="flex h-full items-center justify-center text-zinc-400">
               <span className="text-sm">No Image</span>
            </div>
         )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          <Link to={`/projects/${project.id}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action */}
        <div className="mt-5 flex items-center text-sm font-bold text-indigo-600 dark:text-indigo-400">
          View Details <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
