import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();
  const logoUrl = "public/images/logo.png";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      toast({
        title: `🚧 Section "${sectionId}" not found. Navigation feature needs setup. 🚀`,
      });
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      toast({
        title:
          "🚧 Contact section not found. Navigation feature needs setup. 🚀",
      });
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Products", id: "products" },
    { label: "Chain Models", id: "chain-models" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <div className="bg-black text-on-black py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row flex-wrap justify-between items-center text-sm gap-y-2">
          <div className="flex items-center space-x-4 md:space-x-6">
            <a
              href="https://wa.me/923018988978"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-primary transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-primary" />
              <span>0301-8988978</span>
            </a>
            <a
              href="mailto:mqridershubpvtlt@gmail.com"
              className="flex items-center space-x-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span>mqridershubpvtlt@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Lahore Industrial Zone</span>
          </div>
        </div>
      </div>

      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick("home")}
            >
              <img
                src={logoUrl}
                alt="MQ Riders Hub Logo"
                className="max-w-[160px] w-full object-contain"
              />
            </motion.div>

            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-medium transition-colors duration-200 relative group text-sm lg:text-base ${
                    isScrolled
                      ? "text-foreground hover:text-primary"
                      : "text-primary-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full`}
                  ></span>
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                onClick={handleContactClick}
                className="brand-gradient text-primary-foreground hover:opacity-90 transition-opacity duration-200 pulse-glow"
              >
                Get Quote
              </Button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X
                  className={`w-6 h-6 ${
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-background border-t border-border shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left py-2 text-foreground hover:text-primary font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  handleContactClick();
                  setIsMenuOpen(false);
                }}
                className="w-full brand-gradient text-primary-foreground"
              >
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
};

export default Header;
