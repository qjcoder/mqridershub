import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Hero = () => {
  const { toast } = useToast();

  const handleShopNow = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      toast({
        title:
          "🚧 Products section not found. Navigation feature needs setup. 🚀",
      });
    }
  };

  const handleLearnMore = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      toast({
        title: "🚧 About section not found. Navigation feature needs setup. 🚀",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-0 sm:pt-0">
      <div className="absolute inset-0 gear-pattern opacity-20 z-0"></div>
      <div className="absolute inset-0 chain-pattern opacity-10 z-0"></div>

      <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 z-10 overflow-hidden">
        <img
          alt="Aggressive sport motorcycle silhouette with dramatic red lighting highlighting the sprocket and engine"
          className="w-full h-full object-cover object-right filter grayscale contrast-150"
          src="https://images.unsplash.com/photo-1646292919465-99abd13d68f6"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-[-308px] sm:mt-0">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center">
          <motion.div
            className="text-primary-foreground space-y-4 sm:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-3 py-1 sm:px-4 sm:py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-foreground">
                Top Tier Sprockets
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">MQ Riders HUB</span>
                <br />
                <span className="text-primary-foreground">
                  Where Chain Meets
                </span>
                <br />
                <span className="text-primary">Champions</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Precision-engineered sprocket kits for ultimate performance and
              durability. Power up your ride with MQ Riders Hub.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { icon: Shield, text: "Premium Quality" },
                { icon: Zap, text: "Peak Performance" },
                { icon: Star, text: "Trusted by Riders" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm sm:text-base text-gray-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button
                onClick={handleShopNow}
                size="lg"
                className="text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 pulse-glow group"
              >
                Shop Sprockets
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={handleLearnMore}
                size="lg"
                className="text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 bg-primary/20 text-primary-foreground border border-primary hover:bg-primary/30 transition"
              >
                Discover More
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-primary-foreground/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              {[
                { number: "1K+", label: "Parts Sold" },
                { number: "5+", label: "Bike Models" },
                { number: "100%", label: "Quality Focus" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative z-10">
                <img
                  alt="High-performance motorcycle sprocket"
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                  src="https://images.unsplash.com/photo-1525207106105-b340f7384b30"
                />
              </div>

              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-xl z-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="font-bold text-sm">MQ</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-black/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/10 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
              >
                <div className="flex items-center space-x-2 text-yellow-400">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-white">
                    Top Rated
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/70 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
