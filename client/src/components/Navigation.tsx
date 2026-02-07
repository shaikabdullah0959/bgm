import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/divisions", label: "Divisions" },
    { href: "/team", label: "Our Team" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
          scrolled || isOpen ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-2" : "bg-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src="/bgm-logo.png" 
                alt="Boushahri Group Medical Logo" 
                className="h-14 w-20 group-hover:scale-105 transition-transform bg-white rounded-lg p-1.5"
              />
              <div className="flex flex-col text-primary">
                <span className="font-display font-bold text-lg leading-tight tracking-wide">BOUSHAHRI</span>
                <span className="text-[0.65rem] uppercase tracking-widest font-sans font-semibold" style={{ color: '#2598E4' }}>Group Medical</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 justify-center flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    location === link.href
                      ? "bg-secondary/10 text-secondary font-semibold"
                      : "text-gray-600 hover:text-primary hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              {/* <div className="ml-4 pl-4 border-l border-gray-200">
                 <Link href="/contact">
                  <Button 
                    variant={scrolled || location !== "/" ? "default" : "secondary"}
                    size="sm"
                    className="rounded-full px-6 shadow-md hover:shadow-lg transition-all"
                  >
                    Get in Touch
                  </Button>
                 </Link>
              </div> */}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "md:hidden p-2 rounded-full transition-colors",
                !scrolled && location === "/" && !isOpen
                  ? "text-white hover:bg-white/10"
                  : "text-gray-900 hover:bg-gray-100"
              )}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-4 md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "p-4 text-lg font-medium border-b border-gray-50 transition-colors",
                    location === link.href ? "text-primary bg-primary/5 rounded-xl border-none" : "text-gray-600 hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-8">
                 <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full text-lg py-6 rounded-xl shadow-lg shadow-primary/20">
                    Get in Touch
                  </Button>
                 </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
