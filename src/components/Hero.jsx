import { motion as Motion } from 'framer-motion';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';

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

const Hero = () => {
  return (
    <div className="relative isolate pt-14 dark:bg-zinc-950">
      {/* Background Gradient */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50"
          >
            Building the future with <span className="text-indigo-600 dark:text-indigo-400">AI & Code</span>
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400"
          >
            I&apos;m a software engineer specializing in artificial intelligence and modern web technologies.
            Here are some of the projects I&apos;ve been working on.
          </Motion.p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/projects"
              className="rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              View Projects
            </Link>
            <Link to="/about" className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="mt-16 sm:mt-24">
            <Motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-8">
                         <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">Featured Work</p>
                    </div>
                </div>
                <Carousel projects={projects} />
            </Motion.div>
        </div>
      </div>

        {/* Bottom Gradient */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
