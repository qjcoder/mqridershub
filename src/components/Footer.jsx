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
  const logoUrl = "images/logo_black.png";

  const handleLinkClick = (linkName, url = "#") => {
    if (url === "#") {
      toast({
        title: `\uD83D\uDEA7 ${linkName} link isn't implemented yet\u2014but don't worry! You can request it in your next prompt! \uD83D\uDE80`,
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
        title: `\uD83D\uDEA7 Section \"${sectionId}\" not found. Navigation feature needs setup. \uD83D\uDE80`,
      });
    }
  };

  return (
    <footer className="bg-black text-primary-foreground text-xs sm:text-sm">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className="flex justify-center sm:justify-start mb-4 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <img
                src={logoUrl}
                alt="MQ Riders Hub Logo"
                className="w-32 sm:w-[140px] object-contain"
              />
            </div>

            <p className="text-gray-400 text-xs leading-relaxed mb-5">
              Your trusted partner for premium motorcycle sprocket kits and
              components. Quality parts for serious riders who demand the best.
            </p>

            <div className="space-y-2 text-xs">
              <a
                href="https://wa.me/923018988978"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="text-gray-300">0301-8988978</span>
              </a>
              <a
                href="mailto:mqridershubpvtlt@gmail.com"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-gray-300">
                  mqridershubpvtlt@gmail.com
                </span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-gray-300">Lahore Industrial Zone</span>
              </div>
            </div>
          </motion.div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <div className="flex flex-wrap gap-6">
              {Object.keys(footerLinks).map((category, i) => (
                <motion.div
                  key={category}
                  className="min-w-[120px] flex-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (i + 1) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm font-bold mb-2 block capitalize text-primary-foreground">
                    {category}
                  </span>
                  <div className="space-y-1 text-xs">
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
                </motion.div>
              ))}

              <motion.div
                className="min-w-[120px] flex-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-bold mb-2 block text-primary-foreground">
                  Follow Us
                </span>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <button
                      key={index}
                      onClick={() => handleLinkClick(social.name, social.url)}
                      className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200 group"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon className="w-4 h-4 text-gray-300 group-hover:text-white" />
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
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
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm space-y-2 sm:space-y-0">
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
