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
    <header className="bg-card shadow-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand-secondary rounded-lg flex items-center justify-center text-2xl">
              😊
            </div>
            <span className="text-xl font-bold text-navy">My Website</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={isActive(item.path) ? "default" : "ghost"}
                asChild
                className={`px-6 py-2 font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground shadow-button"
                    : "text-navy hover:bg-secondary hover:text-secondary-foreground"
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