"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll"; // ✅ Import react-scroll

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "About", href: "about" }, // ✅ remove '#' for react-scroll
    { label: "Skills", href: "skills" },
    { label: "Project", href: "projects" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b" : ""
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href={"/"} className="text-xl font-bold text-primary">
            Md Owais
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <ScrollLink
                to={item.href}
                smooth={true}
                duration={500}
                spy={true}
                key={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                {item.label}
              </ScrollLink>
            ))}
            <a href="/resume.pdf" download>
              <Button variant="default" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </a>

          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant={"ghost"}
            size={"icon"}
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {menuItems.map((item) => (
                <ScrollLink
                  to={item.href}
                  smooth={true}
                  duration={500}
                  spy={true}
                  key={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-all cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)} // close mobile menu
                >
                  {item.label}
                </ScrollLink>
              ))}
              <Button variant={"default"} size={"sm"} className="gap-2">
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
