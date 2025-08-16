import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Menu, X, Book, User, Mail, Home } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation = ({ currentPage, onPageChange }: NavigationProps) => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newIsDark);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'books', label: 'Books', icon: Book },
    { id: 'about', label: 'About', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-xl font-bold text-primary hover:text-accent transition-smooth"
            >
              Dr. Sarah Johnson
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant={currentPage === id ? "default" : "ghost"}
                size="sm"
                onClick={() => handleNavClick(id)}
                className="transition-smooth"
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </Button>
            ))}
            
            <div className="ml-4 pl-4 border-l border-border">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ id, label, icon: Icon }) => (
                <Button
                  key={id}
                  variant={currentPage === id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handleNavClick(id)}
                  className="w-full justify-start transition-smooth"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;