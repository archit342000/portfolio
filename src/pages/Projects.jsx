import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  // Get unique categories
  const categories = [...new Set(projects.map(p => p.category))];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">All Projects</h1>
        <p className="text-secondary max-w-2xl mx-auto">
          Explore my complete portfolio of work across Artificial Intelligence, Machine Learning, and Software Engineering.
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((category) => {
          const categoryProjects = projects.filter(p => p.category === category);

          return (
            <section key={category} className="animate-fade-in-up">
              <div className="flex items-center mb-6">
                <h2 className="text-2xl font-bold text-primary">{category}</h2>
                <div className="ml-4 flex-grow h-px bg-base"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} className="w-full" />
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
