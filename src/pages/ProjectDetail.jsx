import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, ExternalLink, Github, PlayCircle } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Project Not Found</h2>
        <Link to="/" className="text-primary-600 hover:text-primary-500 flex items-center font-medium">
          <ArrowLeft size={20} className="mr-2" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
      <Link to="/" className="inline-flex items-center text-secondary hover:text-primary mb-8 transition-colors font-medium">
        <ArrowLeft size={20} className="mr-2" /> Back to Projects
      </Link>

      <div className="bg-surface rounded-2xl shadow-sm border border-base overflow-hidden">
        <div className="aspect-video w-full overflow-hidden relative group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{project.title}</h1>
              <p className="text-secondary text-lg">{project.description}</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              {project.demoType === 'video' ? (
                <a href={project.demoUrl} className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-500 transition-colors shadow-lg shadow-primary-500/20">
                    <PlayCircle size={18} className="mr-2" /> Watch Demo
                </a>
              ) : (
                <a href={project.demoUrl} className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-500 transition-colors shadow-lg shadow-primary-500/20">
                    <ExternalLink size={18} className="mr-2" /> Live Demo
                </a>
              )}

              <a href="#" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-surface border border-base text-secondary text-sm font-medium hover:bg-surface-variant transition-colors">
                <Github size={18} className="mr-2" /> Code
              </a>
            </div>
          </div>

          <div className="border-t border-base py-8">
            <h2 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-surface-variant text-primary text-sm font-medium border border-base">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-base pt-8">
            <h3 className="text-lg font-bold text-primary mb-4">About the Project</h3>
            <div className="prose dark:prose-invert max-w-none text-secondary leading-relaxed">
              <p>{project.longDescription || project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
