import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Our Profile", path: "/profile" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Message Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-cta rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
              😊
            </div>
            <span className="text-2xl font-bold text-navy group-hover:text-brand-primary transition-colors duration-300">My Website</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={isActive(item.path) ? "default" : "ghost"}
                asChild
                className={`px-6 py-3 font-semibold rounded-xl transition-all duration-300 ${
                  isActive(item.path)
                    ? "gradient-cta text-white shadow-glow"
                    : "text-navy hover:bg-brand-light hover:text-brand-primary"
                }`}
              >
                <Link to={item.path}>{item.label}</Link>
              </Button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" className="md:hidden text-navy">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;