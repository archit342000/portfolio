import Carousel from '../components/Carousel';
import { ArrowRight, Terminal, Cpu } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-canvas">

      {/* Global Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none" />

      {/* Unified Hero & Carousel Section */}
      <section className="relative flex flex-col justify-start pt-20 pb-8 min-h-screen max-w-7xl mx-auto w-full">

        {/* HUD Elements - Decorative System Status */}
        <div className="absolute top-8 left-8 hidden md:flex items-center gap-2 animate-fade-in-up z-20">
            <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="hud-text text-accent-400">SYS.ONLINE</span>
        </div>
        <div className="absolute top-8 right-8 hidden md:block animate-fade-in-up [animation-delay:100ms] z-20">
             <span className="hud-text text-primary-400">V.0.2.0</span>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/20 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-primary mb-6 tracking-tighter leading-tight">
              <span className="block mb-2 font-sans">Building</span>
              <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 animate-shimmer bg-[length:200%_auto]">
                Intelligence
              </span>
              <span className="block mt-2 font-sans text-3xl sm:text-5xl md:text-6xl text-primary/80">
                Into Software
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-secondary mb-8 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
              I engineer the bridge between <span className="text-primary-400 border-b border-primary-500/30">complex AI models</span> and <span className="text-accent-400 border-b border-accent-500/30">human-centric applications</span>.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up [animation-delay:400ms] mb-12">
              <a href="#projects" className="group relative font-mono px-8 py-3 rounded bg-primary-600/10 border border-primary-500/50 text-white font-bold overflow-hidden transition-all hover:bg-primary-600 hover:border-primary-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                <span className="relative flex items-center">
                  <Terminal size={18} className="mr-2" /> View Projects
                </span>
              </a>

              <a href="mailto:contact@example.com" className="group font-mono px-8 py-3 rounded bg-transparent border border-white/10 text-secondary font-bold hover:text-white hover:border-accent-500/50 hover:bg-surface/50 transition-all backdrop-blur-sm">
                <span className="relative flex items-center">
                  Contact Protocol <div className="ml-2 w-1.5 h-4 bg-accent-500/50 animate-pulse" />
                </span>
              </a>
            </div>
        </div>

        {/* Integrated Carousel */}
        <div id="projects" className="relative z-10 w-full animate-fade-in-up [animation-delay:600ms]">
           <div className="flex items-center justify-center gap-3 mb-6 opacity-80">
             <span className="w-16 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />
             <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
                <Cpu size={14} className="text-accent-400" />
                <span className="font-mono text-[10px] text-accent-100 uppercase tracking-[0.2em]">Featured Modules</span>
             </div>
             <span className="w-16 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />
           </div>
           <Carousel className="py-4" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 text-center relative overflow-hidden border-t border-white/5 bg-surface/30 backdrop-blur-md">

        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl font-mono text-primary mb-6 flex items-center justify-center gap-2">
            <span className="text-accent-500">{`>`}</span> Ready to Collaborate?
          </h2>
          <p className="text-secondary mb-8 text-lg">Initialize a new project stream.</p>

          <a href="mailto:contact@example.com" className="inline-flex items-center text-accent-400 font-mono font-bold text-xl hover:text-accent-300 transition-colors group">
            <span className="border-b-2 border-accent-500/30 group-hover:border-accent-400 pb-1">Execute Protocol</span>
            <ArrowRight className="ml-3 transition-transform group-hover:translate-x-2" size={24} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
