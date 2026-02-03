import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  // Get unique categories
  const categories = [...new Set(projects.map(p => p.category))];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold font-mono text-primary mb-6 animate-fade-in-up">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
            Project Archives
          </span>
        </h1>
        <p className="text-secondary max-w-2xl mx-auto text-lg animate-fade-in-up [animation-delay:200ms]">
          Accessing complete database of engineering works and AI models.
        </p>
      </div>

      <div className="space-y-24">
        {categories.map((category, catIndex) => {
          const categoryProjects = projects.filter(p => p.category === category);

          return (
            <section key={category} className="relative">
              {/* Category Header */}
              <div className="flex items-center mb-10 animate-fade-in-up" style={{ animationDelay: `${(catIndex * 100) + 300}ms` }}>
                <div className="h-8 w-1 bg-accent-500 mr-4 shadow-[0_0_10px_theme('colors.accent.500')] rounded-full" />
                <h2 className="text-2xl font-bold font-mono text-primary tracking-tight">{category}</h2>
                <div className="ml-6 flex-grow h-px bg-gradient-to-r from-white/10 to-transparent"></div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                {categoryProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${(catIndex * 100) + (index * 100) + 400}ms` }}
                  >
                    <ProjectCard project={project} className="w-full h-full" />
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
