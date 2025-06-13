import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const logoUrl = "src/images/logo_black.png"; // Assuming public folder usage

  const handleLinkClick = (linkName, url = "#") => {
    if (url === "#") {
      toast({
        title: `🚧 ${linkName} link isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
      });
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const footerLinks = {
    products: [
      { name: "Sprocket Kits", id: "products" },
      { name: "Chain Models", id: "chain-models" },
      { name: "Front Sprockets", id: "products" },
      { name: "Rear Sprockets", id: "products" },
      { name: "Racing Parts", id: "products" },
      { name: "Touring Parts", id: "products" },
    ],
    support: [
      { name: "Installation Guide", id: "services" },
      { name: "Warranty Info", id: "services" },
      { name: "Returns & Exchanges", id: "contact" },
      { name: "Size Chart", id: "products" },
      { name: "Technical Support", id: "contact" },
      { name: "FAQ", id: "contact" },
    ],
    company: [
      { name: "About Us", id: "about" },
      { name: "Contact", id: "contact" },
    ],
  };

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://web.facebook.com/mqridershub",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/mqridershub/",
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://www.youtube.com/@MQRidersHub",
    },
  ];

  const scrollToSection = (sectionId) => {
    if (sectionId === "#") {
      handleLinkClick("This link");
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      toast({
        title: `🚧 Section "${sectionId}" not found. Navigation feature needs setup. 🚀`,
      });
    }
  };

  return (
    <footer className="bg-black text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className="flex items-center space-x-3 mb-6 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <img
                src={logoUrl}
                alt="MQ Riders Hub Logo"
                className="max-w-[160px] w-full object-contain"
              />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted partner for premium motorcycle sprocket kits and
              components. Quality parts for serious riders who demand the best.
            </p>

            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/923018988978"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="text-gray-300">0301-8988978</span>
              </a>
              <a
                href="mailto:mqridershubpvtlt@gmail.com"
                className="flex items-center space-x-3 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">
                  mqridershubpvtlt@gmail.com
                </span>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-300">Lahore Industrial Zone</span>
              </div>
            </div>
          </motion.div>

          {Object.keys(footerLinks).map((category, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (i + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-base font-bold mb-4 block capitalize text-primary-foreground">
                {category}
              </span>
              <div className="space-y-2 text-sm">
                {footerLinks[category].map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              {category === "company" && (
                <div className="mt-8">
                  <span className="text-base font-bold mb-3 block text-primary-foreground">
                    Follow Us
                  </span>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <button
                        key={index}
                        onClick={() => handleLinkClick(social.name, social.url)}
                        className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200 group"
                        aria-label={`Follow us on ${social.name}`}
                      >
                        <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="border-t border-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} MQ Riders Hub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
