import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md transition-all dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Portfolio
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  isActive(link.href)
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-zinc-600 dark:text-zinc-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-600 hover:text-zinc-900 focus:outline-none dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-white/95 backdrop-blur-md dark:border-white/5 dark:bg-zinc-900/95">
          <div className="space-y-1 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-zinc-100 hover:text-indigo-600 dark:hover:bg-zinc-800 dark:hover:text-indigo-400 ${
                  isActive(link.href)
                    ? 'text-indigo-600 bg-zinc-50 dark:bg-zinc-800/50 dark:text-indigo-400'
                    : 'text-zinc-600 dark:text-zinc-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
