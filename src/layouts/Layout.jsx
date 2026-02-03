import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-canvas text-primary transition-colors duration-300">
      {/* Navigation - Layer 50 Chrome */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-surface/80 backdrop-blur-md border-b border-base shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <Link to="/" className="text-xl font-mono font-bold tracking-tight hover:text-primary transition-colors text-primary">
              Portfolio
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors text-secondary hover:text-primary">Home</Link>
              <Link to="/projects" className="text-sm font-medium hover:text-primary transition-colors text-secondary hover:text-primary">Projects</Link>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-surface-variant text-secondary hover:text-primary transition-colors focus:outline-none"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-surface-variant text-secondary hover:text-primary transition-colors focus:outline-none"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-secondary hover:text-primary hover:bg-surface-variant focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-surface border-b border-base shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-surface-variant text-secondary hover:text-primary">
                Home
              </Link>
              <Link to="/projects" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-surface-variant text-secondary hover:text-primary">
                Projects
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-base mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-secondary">© 2026 Portfolio. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
