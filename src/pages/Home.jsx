import Carousel from '../components/Carousel';
import { ArrowRight, Terminal } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Unified Hero & Carousel Section */}
      <section className="relative flex flex-col justify-start pt-20 pb-8 min-h-screen max-w-7xl mx-auto w-full overflow-hidden">

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-600/20 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-primary mb-4 tracking-tighter leading-tight">
              Building Intelligence <br/>
              <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 animate-shimmer bg-[length:200%_auto]">
                Into Software
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-secondary mb-6 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
              I engineer the bridge between complex AI models and human-centric applications.
              Specializing in <span className="text-primary-400">Deep Learning</span> and <span className="text-primary-400">Scalable Systems</span>.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up [animation-delay:400ms] mb-4">
              <a href="#projects" className="group relative font-mono px-6 py-3 rounded bg-primary-600 text-white font-bold overflow-hidden transition-all hover:scale-105 shadow-lg shadow-primary-500/25">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                <span className="relative flex items-center">
                  View Projects <Terminal size={18} className="ml-2" />
                </span>
              </a>

              <a href="mailto:contact@example.com" className="group font-mono px-6 py-3 rounded bg-transparent border border-white/10 text-secondary font-bold hover:text-white hover:border-accent-500/50 hover:bg-surface/50 transition-all hover:scale-105 backdrop-blur-sm">
                Contact Protocol
              </a>
            </div>
        </div>

        {/* Integrated Carousel */}
        <div id="projects" className="relative z-10 w-full mt-8 animate-fade-in-up [animation-delay:600ms]">
           <div className="flex items-center justify-center gap-3 mb-4 opacity-60">
             <span className="w-12 h-px bg-gradient-to-r from-transparent to-accent-500" />
             <span className="font-mono text-xs text-accent-400 uppercase tracking-[0.2em]">Featured Modules</span>
             <span className="w-12 h-px bg-gradient-to-l from-transparent to-accent-500" />
           </div>
           <Carousel className="py-2" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 text-center relative overflow-hidden bg-canvas/50 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/10 pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-primary mb-6">Ready to Collaborate?</h2>
          <p className="text-secondary mb-8 text-lg">Let's build something intelligent.</p>

          <a href="mailto:contact@example.com" className="inline-flex items-center text-accent-400 font-mono font-bold text-xl hover:text-accent-300 transition-colors group">
            <span className="border-b-2 border-accent-500/30 group-hover:border-accent-400 pb-1">Initialize Contact</span>
            <ArrowRight className="ml-3 transition-transform group-hover:translate-x-2" size={24} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
