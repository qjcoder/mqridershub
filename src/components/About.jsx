import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Wrench, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Users, number: "5000+", label: "Happy Customers" },
    { icon: Wrench, number: "10+", label: "Bike Models Supported" },
    { icon: Clock, number: "24/7", label: "Customer Support" },
  ];

  const features = [
    {
      title: "Premium Quality Materials",
      description:
        "We use only the finest hardened steel and aerospace-grade aluminum for maximum durability and performance.",
      imageAlt:
        "Close-up of premium motorcycle sprocket showing precision machining and quality materials, with red accents",
      imageSrc: "src/images/closed up.png",
      details: [
        "Hardened steel construction for longevity",
        "Corrosion-resistant coating",
        "Heat-treated for maximum strength",
      ],
    },
    {
      title: "Precision Engineering",
      description:
        "Every sprocket is CNC-machined to exact specifications, ensuring perfect fit and optimal power transfer.",
      imageAlt:
        "CNC machine precisely crafting a motorcycle sprocket component with red laser guide lines",
      imageSrc: "src/images/laser guidlines.png",
      details: [
        'CNC-machined to ±0.001" tolerance',
        "Computer-aided design optimization",
        "Quality tested before shipping",
      ],
    },
    {
      title: "Universal Compatibility",
      description:
        "Our extensive catalog covers many popular local and international motorcycle brands and models.",
      imageAlt:
        "Collection of various sprockets suitable for different motorcycle brands like Honda, Yamaha, and local Pakistani brands, with red highlights",
      imageSrc: "src/images/collection.png",
      details: [
        "Honda, Yamaha, Road Prince, Ravi",
        "Unique, Super Star, United, ZXMCO",
        "And many more models supported",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            About <span className="text-brand-gradient">MQ Riders Hub</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            🏍 Welcome to MQ Riders Hub – Where Chains Meet Champions. From
            engine rev to smooth acceleration — your ride deserves the best
            chains and sprockets in the game.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 brand-gradient rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Features */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Text */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                  {feature.title}
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
                      <span className="text-sm sm:text-base text-foreground">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift border border-border">
                  <img
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    className="w-full h-auto aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                </div>

                <motion.div
                  className="absolute -bottom-6 -right-6 w-20 h-20 sm:w-24 sm:h-24 brand-gradient rounded-full flex items-center justify-center shadow-lg"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <span className="text-[10px] sm:text-xs text-primary-foreground font-bold text-center leading-tight">
                    QUALITY
                    <br />
                    ASSURED
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          className="mt-20 text-center bg-secondary rounded-3xl p-6 sm:p-12 border border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            Our Mission
          </h3>
          <p className="text-base sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At MQ Riders Hub, we're committed to providing motorcycle
            enthusiasts with the highest quality sprocket kits and components.
            Every product we sell is backed by our passion for riding and our
            dedication to excellence. We understand that your bike is more than
            transportation—it's your freedom, your passion, your lifestyle.
            That's why we only offer parts that meet our rigorous standards for
            quality, performance, and reliability.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
