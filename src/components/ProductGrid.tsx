import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductGridProps {
  products?: Product[];
  onQuickView?: (productId: string) => void;
  onAddToCart?: (productId: string) => void;
}

const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    description: "Premium wireless headphones with noise cancellation",
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80",
    description: "Advanced smartwatch with health tracking features",
  },
  {
    id: "3",
    name: "Laptop Stand",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
    description: "Ergonomic aluminum laptop stand for better posture",
  },
  {
    id: "4",
    name: "Wireless Charger",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=500&q=80",
    description: "Fast wireless charging pad for all devices",
  },
  {
    id: "5",
    name: "Mechanical Keyboard",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80",
    description: "RGB mechanical keyboard with custom switches",
  },
  {
    id: "6",
    name: "Portable Speaker",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    description: "Waterproof portable speaker with amazing sound",
  },
];

const ProductGrid = ({
  products = defaultProducts,
  onQuickView = (id) => console.log(`Quick view product ${id}`),
  onAddToCart = (id) => console.log(`Add product ${id} to cart`),
}: ProductGridProps) => {
  return (
    <div className="w-full bg-gray-50 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onQuickView={() => onQuickView(product.id)}
            onAddToCart={() => onAddToCart(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
