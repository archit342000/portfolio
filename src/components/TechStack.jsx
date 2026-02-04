import { skills } from '../data/skills';

const TechStack = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-600/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-primary mb-4">
            Technical Skills
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            The technologies and tools I use to build solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <div
                key={skillGroup.category}
                className="group relative bg-surface border border-white/5 rounded-xl p-6 hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />

                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-surface-variant text-accent-400 group-hover:text-accent-300 group-hover:bg-accent-500/10 transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="ml-4 font-mono font-bold text-lg text-primary">{skillGroup.category}</h3>
                </div>

                <div className="space-y-3">
                  {skillGroup.items.map((item) => (
                    <div key={item} className="flex items-center text-secondary group-hover:text-primary-300 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-600/50 mr-3 group-hover:bg-accent-400 transition-colors" />
                      <span className="font-mono text-sm tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
