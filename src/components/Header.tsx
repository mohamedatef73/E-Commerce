import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, ShoppingCart, Menu } from "lucide-react";
import Cart from "./Cart";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

interface HeaderProps {
  onSearch?: (query: string) => void;
  cartItemCount?: number;
  searchSuggestions?: Array<{
    category: string;
    items: Array<{ id: string; name: string }>;
  }>;
}

const Header = ({
  onSearch = () => console.log("Search triggered"),
  cartItemCount = 3,
  searchSuggestions = [
    {
      category: "Popular",
      items: [
        { id: "1", name: "Wireless Headphones" },
        { id: "2", name: "Smart Watch" },
      ],
    },
    {
      category: "Recent Searches",
      items: [
        { id: "3", name: "Laptop" },
        { id: "4", name: "Camera" },
      ],
    },
  ],
}: HeaderProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full h-20 bg-white border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Browse categories and featured items
              </SheetDescription>
            </SheetHeader>
            {/* Mobile menu content */}
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold">Store</h1>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-8">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10"
              onClick={() => setIsSearchOpen(true)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Mobile Search Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsSearchOpen(true)}
        >
          <Search className="h-6 w-6" />
        </Button>

        {/* Cart */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Your Cart</SheetTitle>
              <SheetDescription>
                Review your items and checkout
              </SheetDescription>
            </SheetHeader>
            <Cart />
          </SheetContent>
        </Sheet>

        {/* Search Dialog */}
        <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
          <CommandInput placeholder="Type to search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {searchSuggestions.map((group) => (
              <CommandGroup key={group.category} heading={group.category}>
                {group.items.map((item) => (
                  <CommandItem
                    key={item.id}
                    onSelect={() => {
                      onSearch(item.name);
                      setIsSearchOpen(false);
                    }}
                  >
                    {item.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </CommandDialog>
      </div>
    </header>
  );
};

export default Header;
