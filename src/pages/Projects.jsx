import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'AI Image Generator',
    description: 'A deep learning model capable of generating high-resolution images from text descriptions. Built with PyTorch and React.',
    tags: ['AI', 'React', 'PyTorch'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Smart Home Automation',
    description: 'IoT dashboard for controlling smart home devices. Features real-time data visualization and energy consumption analytics.',
    tags: ['IoT', 'Dashboard', 'Data Viz'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with secure payment processing, inventory management, and personalized recommendations.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop'
  },
];

const Projects = () => {
  return (
    <div className="bg-white pt-24 pb-24 sm:pt-32 dark:bg-zinc-950 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">All Projects</h2>
          <p className="mt-2 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A complete collection of my work in AI, software engineering, and web development.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project, index) => (
             <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
