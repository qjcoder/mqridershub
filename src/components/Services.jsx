import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Headphones as HeadphonesIcon,
  Clock,
  Award,
  CheckCircle,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Services = () => {
  const { toast } = useToast();

  const handleServiceClick = (service) => {
    toast({
      title: `🚧 ${service} service isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
    });
  };

  const services = [
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "Every product undergoes rigorous quality testing before it reaches your hands.",
      features: [
        "Strict Testing",
        "Performance Verified",
        "Satisfaction Guaranteed",
      ],
      color: "bg-indigo-500",
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description:
        "Get your parts quickly with our expedited shipping options. Most orders ship within 24 hours.",
      features: ["24hr Processing", "Express Options", "Order Tracking"],
      color: "bg-green-500",
    },

    {
      icon: Clock,
      title: "Quick Turnaround",
      description:
        "Fast processing and fulfillment to get you back on the road as quickly as possible.",
      features: ["Same-Day Processing", "Rush Orders", "Priority Handling"],
      color: "bg-red-600",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Our <span className="text-brand-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond just selling parts, we provide comprehensive services to
            ensure your motorcycle performs at its best with complete peace of
            mind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg hover-lift group cursor-pointer border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleServiceClick(service.title)}
            >
              <div
                className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-primary font-medium text-sm">
                  Learn More →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-card rounded-3xl p-12 shadow-lg border border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              How It Works
            </h3>
            <p className="text-lg text-muted-foreground">
              Simple steps to get your motorcycle upgraded
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose Your Parts",
                description:
                  "Browse our catalog and select the perfect parts for your motorcycle.",
              },
              {
                step: "02",
                title: "Place Order",
                description:
                  "Add to cart and checkout securely. We accept various payment methods.",
              },
              {
                step: "03",
                title: "Fast Shipping",
                description:
                  "Your order is processed quickly and shipped with tracking information.",
              },
              {
                step: "04",
                title: "Install & Ride",
                description:
                  "Install your new parts and enjoy the enhanced performance. Hit the road!",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 brand-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                  {step.step}
                </div>

                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border -z-10">
                    <div className="w-1/2 h-full bg-primary"></div>
                  </div>
                )}

                <h4 className="text-xl font-bold text-card-foreground mb-3">
                  {step.title}
                </h4>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => handleServiceClick("Get Started")}
              size="lg"
              className="brand-gradient text-primary-foreground hover:opacity-90 transition-opacity duration-200 pulse-glow"
            >
              Get Started Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
