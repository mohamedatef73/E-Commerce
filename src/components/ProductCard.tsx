import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Eye, ShoppingCart } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ProductCardProps {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  description?: string;
  onQuickView?: () => void;
  onAddToCart?: () => void;
}

const ProductCard = ({
  id = "1",
  name = "Sample Product",
  price = 99.99,
  image = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  description = "A high-quality product with amazing features",
  onQuickView = () => console.log("Quick view clicked"),
  onAddToCart = () => console.log("Add to cart clicked"),
}: ProductCardProps) => {
  return (
    <Card className="w-[280px] h-[400px] group relative bg-white transition-all duration-300 hover:shadow-lg">
      <div className="relative h-[250px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={onQuickView}
                  className="rounded-full"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Quick view</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={onAddToCart}
                  className="rounded-full"
                >
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to cart</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg truncate">{name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">{description}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <p className="text-lg font-bold">${price.toFixed(2)}</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
