import ProjectCard from './ProjectCard';

const Carousel = ({ projects }) => {
  // Duplicate projects to create a seamless loop
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <div className="w-full overflow-hidden py-12">
      <div className="relative flex overflow-hidden mask-linear-gradient">
        <div
          className="flex w-max gap-8 px-4 animate-scroll hover:[animation-play-state:paused]"
        >
          {duplicatedProjects.map((project, index) => (
            <div
                key={`${project.id}-${index}`}
                className="min-w-[300px] sm:min-w-[400px] flex-shrink-0 h-full"
            >
               <div className="h-full">
                  <ProjectCard project={project} />
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
