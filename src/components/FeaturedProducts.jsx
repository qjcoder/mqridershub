import React from "react";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const FeaturedProducts = () => {
  const { toast } = useToast();

  const handleProductAction = (action) => {
    toast({
      title: `🚧 ${action} feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
    });
  };

  const products = [
    {
      id: 1,
      name: "CD-70 Sprocket Kit",
      price: 1600,
      originalPrice: 2200,
      rating: 4.9,
      reviews: 101,
      imageAlt:
        "Motorcycle sprocket kit for CD-70 with front and rear sprockets and chain",
      imageSrc: "images/CD70-420-104-480.png",
      badge: "Best Seller",
      features: ["Hardened Steel", "420-104-480 Chain", "CD-70 Fit"],
    },
    {
      id: 2,
      name: "CD-70 Sprocket Kit",
      price: 1500,
      originalPrice: 2100,
      rating: 4.8,
      reviews: 130,
      imageAlt:
        "Motorcycle sprocket kit for CD-70 with front and rear sprockets and chain",
      imageSrc: "images/CD70-420-104-480.png",
      badge: "Attractive Price",
      features: ["Hardened Steel", "420-104-460 Chain", "CD-70 Fit"],
    },
    {
      id: 3,
      name: "CD-70 Sprocket Kit",
      price: 1450,
      originalPrice: 2000,
      rating: 4.6,
      reviews: 180,
      imageAlt:
        "Motorcycle sprocket kit for CD-70 with front and rear sprockets and chain",
      imageSrc: "images/CD70-420-104-480.png",
      badge: "Most Affordable",
      features: ["Hardened Steel", "420-104-435 Chain", "CD-70 Fit"],
    },
    {
      id: 4,
      name: "CG-125 Sprocket Kit",
      price: 1900,
      originalPrice: 2400,
      rating: 4.8,
      reviews: 111,
      imageAlt:
        "Motorcycle sprocket kit for CG-125 with front and rear sprockets and chain",
      imageSrc: "images/CD70-420-104-480.png",
      badge: "More Popular",
      features: ["Hardened Steel", "428-100-600 Chain", "CG-125 Fit"],
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            <span className="text-brand-gradient">Featured</span> Products
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular sprocket kits, engineered for performance
            and built to last.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-card rounded-2xl shadow-lg overflow-hidden hover-lift group border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {product.badge}
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleProductAction("Wishlist")}
                    aria-label="Add to Wishlist"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors border border-border"
                  >
                    <Heart className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button
                    onClick={() => handleProductAction("Quick View")}
                    aria-label="Quick View"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors border border-border"
                  >
                    <Eye className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>

                {product.originalPrice > product.price && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs sm:text-sm font-medium">
                      -
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      %
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                <div className="flex flex-wrap gap-1 mb-3">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] sm:text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-current"
                            : "text-muted-foreground/50"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-baseline space-x-2 mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-card-foreground">
                    PKR {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm sm:text-lg text-muted-foreground line-through">
                      PKR {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <Button
                  onClick={() => handleProductAction("Add to Cart")}
                  className="w-full brand-gradient text-primary-foreground hover:opacity-90 transition-opacity duration-200 group"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={() => handleProductAction("View All Products")}
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
