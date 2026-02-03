import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white pt-24 pb-24 sm:pt-32 dark:bg-zinc-950 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">Contact</h2>
          <p className="mt-2 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Get in touch with me for collaborations, opportunities, or just to say hi.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
            <div className="flex justify-center space-x-10">
                <a href="#" className="text-zinc-400 hover:text-indigo-600 transition-colors">
                    <span className="sr-only">Email</span>
                    <Mail className="h-8 w-8" />
                </a>
                <a href="#" className="text-zinc-400 hover:text-indigo-600 transition-colors">
                    <span className="sr-only">GitHub</span>
                    <Github className="h-8 w-8" />
                </a>
                <a href="#" className="text-zinc-400 hover:text-indigo-600 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-8 w-8" />
                </a>
                <a href="#" className="text-zinc-400 hover:text-indigo-600 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-8 w-8" />
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
