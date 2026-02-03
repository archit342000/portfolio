import Carousel from '../components/Carousel';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-20 lg:py-32 max-w-7xl mx-auto w-full text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-primary mb-6 tracking-tight">
          Building Intelligence <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-500">
            Into Software
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-secondary mb-10">
          I am a Software Engineer specializing in Artificial Intelligence.
          I bridge the gap between complex models and user-centric applications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className="px-8 py-3 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-500 transition-all shadow-lg shadow-primary-500/25 hover:-translate-y-0.5">
            View Work
          </a>
          <a href="mailto:contact@example.com" className="px-8 py-3 rounded-full bg-surface border border-base text-secondary font-medium hover:bg-surface-variant transition-colors hover:-translate-y-0.5">
            Contact Me
          </a>
        </div>
      </section>

      {/* Projects Carousel */}
      <section id="projects" className="py-16 bg-canvas overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="text-2xl font-bold text-primary">Featured Projects</h2>
          <p className="text-secondary mt-1">A selection of my recent work in AI and Engineering.</p>
        </div>
        <Carousel />
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 text-center bg-surface border-t border-base">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4">Ready to collaborate?</h2>
          <p className="text-secondary mb-8 text-lg">Let's build something amazing together.</p>
          <a href="mailto:contact@example.com" className="inline-flex items-center text-primary-600 font-bold text-lg hover:text-primary-500 transition-colors">
            Get in Touch <ArrowRight className="ml-2" size={24} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
