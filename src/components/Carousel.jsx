import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Carousel = ({ projects }) => {
  // Duplicate projects to create a seamless loop
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="relative flex overflow-hidden mask-linear-gradient">
        <motion.div
          className="flex gap-8 px-4"
          animate={{
            x: ['0%', '-33.33%'], // Move by one-third of the total width (since we have 3 sets)
          }}
          transition={{
            duration: 20, // Adjust speed
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <div
                key={`${project.id}-${index}`}
                className="min-w-[300px] sm:min-w-[400px] flex-shrink-0"
            >
               <div className="h-full">
                  <ProjectCard project={project} />
               </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
