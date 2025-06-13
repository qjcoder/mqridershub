import React from "react";
import { motion } from "framer-motion";
import { Link2 } from "lucide-react";

const ChainModels = () => {
  const chainData = [
    {
      category: "Chain CD-70",
      models: [
        { name: "420-104-480", price: "PKR 1600" },
        { name: "420-104-460", price: "PKR 1500" },
        { name: "420-104-435", price: "PKR 1450" },
      ],
      imageAlt: "Motorcycle chain suitable for CD-70 models",
      imageSrc: "images/CD70-420-104-480.png",
    },
    {
      category: "Chain CG-125",
      models: [
        { name: "428-100-600", price: "PKR 1900" },
        { name: "428-100-580", price: "PKR 1800" },
        { name: "428-100-560", price: "PKR 1700" },
      ],
      imageAlt: "Motorcycle chain suitable for CG-125 models",
      imageSrc: "images/CD70-420-104-480.png",
    },
    {
      category: "Chain (General Purpose)",
      models: [
        { name: "428-108-625", price: "PKR ---" },
        { name: "428-108-600", price: "PKR ---" },
        { name: "428-108-580", price: "PKR ---" },
      ],
      imageAlt: "General purpose motorcycle chain 428-108 size, black finish",
      imageSrc: "images/CD70-420-104-480.png",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Our <span className="text-brand-gradient">Chain Models</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our range of high-quality motorcycle chains, designed for
            durability and performance.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {chainData.map((categoryData, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl shadow-lg overflow-hidden hover-lift group border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 sm:h-56">
                <img
                  src={categoryData.imageSrc}
                  alt={categoryData.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg sm:text-xl font-bold text-primary-foreground">
                    {categoryData.category}
                  </h3>
                </div>
              </div>

              {/* Details */}
              <div className="p-4 sm:p-6">
                <ul className="space-y-3">
                  {categoryData.models.map((model, modelIndex) => (
                    <li
                      key={modelIndex}
                      className="flex justify-between items-center pb-2 border-b border-border last:border-b-0"
                    >
                      <div className="flex items-center">
                        <Link2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-card-foreground">
                          {model.name}
                        </span>
                      </div>
                      <span className="font-semibold text-sm sm:text-base text-primary">
                        {model.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChainModels;
