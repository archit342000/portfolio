import Carousel from '../components/Carousel';
import { ArrowRight, Terminal } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-24 lg:py-40 max-w-7xl mx-auto w-full text-center overflow-hidden">

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-600/20 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" />

        <div className="relative z-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/80 border border-white/10 backdrop-blur-md mb-8 animate-float">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                </span>
                <span className="text-xs font-mono text-secondary tracking-wide">SYSTEM ONLINE v2.3</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-primary mb-8 tracking-tighter leading-tight">
              Building Intelligence <br/>
              <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 animate-shimmer bg-[length:200%_auto]">
                Into Software
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-xl text-secondary mb-12 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
              I engineer the bridge between complex AI models and human-centric applications.
              Specializing in <span className="text-primary-400">Deep Learning</span> and <span className="text-primary-400">Scalable Systems</span>.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up [animation-delay:400ms]">
              <a href="#projects" className="group relative font-mono px-8 py-4 rounded bg-primary-600 text-white font-bold overflow-hidden transition-all hover:scale-105 shadow-lg shadow-primary-500/25">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                <span className="relative flex items-center">
                  View Projects <Terminal size={18} className="ml-2" />
                </span>
              </a>

              <a href="mailto:contact@example.com" className="group font-mono px-8 py-4 rounded bg-transparent border border-white/10 text-secondary font-bold hover:text-white hover:border-accent-500/50 hover:bg-surface/50 transition-all hover:scale-105 backdrop-blur-sm">
                Contact Protocol
              </a>
            </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section id="projects" className="py-24 bg-canvas/50 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h2 className="text-3xl font-bold font-mono text-primary mb-4 flex items-center justify-center gap-3">
             <span className="w-8 h-px bg-accent-500/50" />
             Featured Modules
             <span className="w-8 h-px bg-accent-500/50" />
          </h2>
          <p className="text-secondary max-w-xl mx-auto">Selected works demonstrating high-performance engineering and algorithmic precision.</p>
        </div>
        <Carousel />
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/10 pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold font-mono text-primary mb-6">Ready to Collaborate?</h2>
          <p className="text-secondary mb-10 text-xl">Let's build something intelligent.</p>

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
