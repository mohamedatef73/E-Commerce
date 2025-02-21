import React, { useState } from "react";
import Header from "./Header";
import HeroCarousel from "./HeroCarousel";
import ProductGrid from "./ProductGrid";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/lib/products";

interface HomeProps {
  onSearch?: (query: string) => void;
  onProductClick?: (productId: string) => void;
  onQuickView?: (productId: string) => void;
  onAddToCart?: (productId: string) => void;
  cartItemCount?: number;
  products?: Array<{
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
  }>;
}

const Home = () => {
  const { items, addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleQuickView = (id: string) => {
    console.log(`Quick view: ${id}`);
  };

  const handleAddToCart = (id: string) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      addToCart(product);
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <Header onSearch={handleSearch} cartItemCount={items.length} />

      {/* Main content */}
      <main className="pt-20">
        <HeroCarousel
          products={filteredProducts.slice(0, 3)}
          onProductClick={handleAddToCart}
        />
        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            <div className="flex-1">
              <ProductGrid
                products={filteredProducts}
                onQuickView={handleQuickView}
                onAddToCart={handleAddToCart}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
