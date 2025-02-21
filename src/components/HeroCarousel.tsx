import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

interface HeroCarouselProps {
  products?: Product[];
  onProductClick?: (productId: string) => void;
}

const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description:
      "Experience crystal clear sound with our latest noise-cancelling technology",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80",
    price: 299.99,
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    description:
      "Track your health and stay connected with this premium smartwatch",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1200&q=80",
    price: 199.99,
  },
  {
    id: "3",
    name: "Professional Camera Kit",
    description:
      "Capture life's moments in stunning detail with our professional camera",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80",
    price: 899.99,
  },
];

const HeroCarousel = ({
  products = defaultProducts,
  onProductClick = (id) => console.log(`Product clicked: ${id}`),
}: HeroCarouselProps) => {
  return (
    <div className="w-full h-[400px] bg-gray-50 relative overflow-hidden">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="relative">
              <div className="relative w-full h-[400px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 p-8 text-white max-w-[600px]">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-4xl font-bold mb-4"
                    >
                      {product.name}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-lg mb-6"
                    >
                      {product.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Button
                        size="lg"
                        onClick={() => onProductClick(product.id)}
                        className="bg-white text-black hover:bg-gray-100"
                      >
                        Shop Now - ${product.price}
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
