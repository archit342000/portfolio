import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-24 sm:py-32 dark:bg-zinc-950">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Project Not Found</h2>
        <Link to="/projects" className="mt-6 flex items-center text-indigo-600 hover:text-indigo-500">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white px-6 py-24 sm:py-32 dark:bg-zinc-950 min-h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
            <Link to="/projects" className="inline-flex items-center text-sm font-medium text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start">
            {/* Image Section */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 sm:aspect-[4/3] lg:aspect-[16/9]">
                 {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                 ) : (
                    <div className="flex h-full items-center justify-center text-zinc-400">
                       <span className="text-lg">No Image Available</span>
                    </div>
                 )}
            </div>

            {/* Content Section */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">{project.title}</h1>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/30">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-8 space-y-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    <p>{project.description}</p>
                    <p>
                        {/* Placeholder for more detailed content */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>

                <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                    >
                        Visit Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
