import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Carousel = ({ projects }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [projects]);

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        ref={carousel}
        className="cursor-grab overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-8 py-8 px-4"
        >
          {projects.map((project) => (
            <motion.div
                key={project.id}
                className="min-w-[300px] sm:min-w-[400px] pointer-events-none" // pointer-events-none prevents click conflicts while dragging
            >
              {/* We wrap ProjectCard to ensure it doesn't capture clicks during drag if we wanted to be very precise,
                  but pointer-events-none on the wrapper handles the main issue.
                  However, links inside ProjectCard need pointer-events-auto if we want them clickable.
                  Let's actually allow pointer events but rely on drag detection if needed.
                  For simplicity in this draggable carousel, we will let links work if not dragging.
               */}
               <div className="pointer-events-auto h-full">
                  <ProjectCard project={project} />
               </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;
