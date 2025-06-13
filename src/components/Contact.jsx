import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title:
        "🚧 Contact form isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["0301-8988978"],
      href: "https://wa.me/923018988978",
      color: "bg-green-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["mqridershubpvtlt@gmail.com"],
      href: "mailto:mqridershubpvtlt@gmail.com",
      color: "bg-red-500",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Lahore Industrial Zone", "Punjab, Pakistan"],
      href: "#",
      color: "bg-purple-500",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Sat: 9AM-7PM", "Sunday: Closed"],
      href: "#",
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our products or need expert advice? Our team of
            motorcycle enthusiasts is here to help you find the perfect parts.
          </p>
        </motion.div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Contact Information
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Ready to upgrade your ride? Get in touch with our expert team
                for personalized recommendations and technical support.
              </p>
            </div>

            <div className="grid gap-5 sm:gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href === "#" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover-lift border border-gray-100 block transition-transform"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-sm sm:text-base text-gray-600"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: (Optional future form) */}
          {/* You can add a contact form in this grid column later */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
