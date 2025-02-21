import { useCart } from "@/contexts/CartContext";
import { Button } from "./ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { items, removeFromCart, updateQuantity, total } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4 border-b border-gray-200"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">${item.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeFromCart(item.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-between mb-4">
          <span className="font-medium">Total</span>
          <span className="font-medium">${total.toFixed(2)}</span>
        </div>
        <Button className="w-full" onClick={() => navigate("/checkout")}>
          Checkout
        </Button>
      </div>
    </div>
  );
}
