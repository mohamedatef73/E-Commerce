export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    description:
      "Experience crystal clear sound with noise-cancelling technology",
    category: "Electronics",
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80",
    description: "Track your health and stay connected",
    category: "Wearables",
  },
  {
    id: "3",
    name: "Professional Camera",
    price: 899.99,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
    description: "Capture life's moments in stunning detail",
    category: "Electronics",
  },
  {
    id: "4",
    name: "Laptop Stand",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
    description: "Ergonomic aluminum laptop stand",
    category: "Accessories",
  },
  {
    id: "5",
    name: "Mechanical Keyboard",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80",
    description: "RGB mechanical keyboard with custom switches",
    category: "Electronics",
  },
  {
    id: "6",
    name: "Portable Speaker",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    description: "Waterproof portable speaker",
    category: "Electronics",
  },
  {
    id: "7",
    name: "Wireless Mouse",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
    description: "Ergonomic wireless mouse",
    category: "Accessories",
  },
  {
    id: "8",
    name: "4K Monitor",
    price: 399.99,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
    description: "Ultra-wide 4K monitor",
    category: "Electronics",
  },
  {
    id: "9",
    name: "Wireless Earbuds",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    description: "True wireless earbuds with noise cancellation",
    category: "Electronics",
  },
  {
    id: "10",
    name: "Phone Stand",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=500&q=80",
    description: "Adjustable phone stand",
    category: "Accessories",
  },
];
