import Carousel from '../components/Carousel';
import TechStack from '../components/TechStack';
import { ArrowRight, Terminal } from 'lucide-react';

const Home = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">

      {/* SECTION 1: Hero */}
      <section className="relative h-screen w-full snap-start flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center overflow-hidden">

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-600/20 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-primary mb-6 tracking-tighter leading-tight">
              Building Intelligence <br/>
              <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 animate-shimmer bg-[length:200%_auto]">
                Into Software
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-secondary mb-8 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
              I engineer the bridge between complex AI models and human-centric applications.
              Specializing in <span className="text-primary-400">Deep Learning</span> and <span className="text-primary-400">Scalable Systems</span>.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up [animation-delay:400ms]">
              <a href="#projects" className="group relative font-mono px-6 py-3 rounded bg-primary-600 text-white font-bold overflow-hidden transition-all hover:scale-105 shadow-lg shadow-primary-500/25">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                <span className="relative flex items-center">
                  View Projects <Terminal size={18} className="ml-2" />
                </span>
              </a>

              <a href="mailto:contact@example.com" className="group font-mono px-6 py-3 rounded bg-transparent border border-white/10 text-secondary font-bold hover:text-white hover:border-accent-500/50 hover:bg-surface/50 transition-all hover:scale-105 backdrop-blur-sm">
                Contact Me
              </a>
            </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
            <span className="text-[10px] font-mono uppercase tracking-widest text-secondary">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-secondary to-transparent" />
        </div>
      </section>

      {/* SECTION 2: Featured Projects */}
      <section id="projects" className="relative h-screen w-full snap-start flex flex-col justify-center items-center bg-canvas/30 overflow-hidden">
         {/* Background Decor */}
         <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.05),transparent_40%)] pointer-events-none" />

         <div className="relative z-10 w-full animate-fade-in-up">
           <div className="flex items-center justify-center gap-3 mb-8 sm:mb-12 opacity-80">
             <span className="w-12 sm:w-24 h-px bg-gradient-to-r from-transparent to-accent-500" />
             <span className="font-mono text-sm text-accent-400 uppercase tracking-[0.3em]">Featured Projects</span>
             <span className="w-12 sm:w-24 h-px bg-gradient-to-l from-transparent to-accent-500" />
           </div>

           <Carousel className="py-4" />
        </div>
      </section>

      {/* SECTION 3: Tech Stack & CTA */}
      <section className="relative h-screen w-full snap-start flex flex-col justify-between items-center py-12 sm:py-20 overflow-hidden">
        {/* Tech Stack (Takes up most space) */}
        <div className="flex-grow flex items-center justify-center w-full">
            <TechStack className="w-full" />
        </div>

        {/* CTA (Anchored at bottom) */}
        <div className="w-full max-w-3xl mx-auto px-4 text-center mt-8 animate-fade-in-up [animation-delay:600ms]">
          <div className="p-6 sm:p-8 rounded-2xl bg-surface/50 border border-white/5 backdrop-blur-sm hover:border-accent-500/30 transition-colors">
            <h2 className="text-2xl sm:text-3xl font-bold font-mono text-primary mb-3">Ready to Collaborate?</h2>

            <a href="mailto:contact@example.com" className="inline-flex items-center text-accent-400 font-mono font-bold text-lg hover:text-accent-300 transition-colors group">
                <span className="border-b-2 border-accent-500/30 group-hover:border-accent-400 pb-1">Get in Touch</span>
                <ArrowRight className="ml-3 transition-transform group-hover:translate-x-2" size={20} />
            </a>
          </div>
          <div className="mt-8 text-secondary text-sm">
             © 2026 Portfolio. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
