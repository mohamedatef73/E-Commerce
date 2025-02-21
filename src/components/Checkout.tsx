import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useNavigate } from "react-router-dom";
import { sendWhatsAppMessage, formatOrderMessage } from "@/lib/whatsapp";

interface CheckoutFormData {
  name: string;
  email: string;
  address: string;
  phone: string;
  paymentMethod: "cash" | "instapay" | "vodafone";
  vodafoneNumber?: string;
  vodafoneOTP?: string;
}

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: "",
    email: "",
    address: "",
    phone: "",
    paymentMethod: "cash",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const message = formatOrderMessage(
      formData,
      items,
      total,
      formData.paymentMethod,
    );
    const sent = await sendWhatsAppMessage("01158932877", message);
    if (sent) {
      clearCart();
      navigate("/order-success");
    } else {
      alert("There was an error sending your order. Please try again.");
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Button onClick={() => navigate("/")}>Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Checkout</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="address">Delivery Address</Label>
                <Input
                  id="address"
                  required
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label>Payment Method</Label>
              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={(value: "cash" | "instapay" | "vodafone") =>
                  setFormData({ ...formData, paymentMethod: value })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash">Cash on Delivery</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="instapay" id="instapay" />
                  <Label htmlFor="instapay">InstaPay</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="vodafone" id="vodafone" />
                  <Label htmlFor="vodafone">Vodafone Cash</Label>
                </div>
              </RadioGroup>

              {formData.paymentMethod === "vodafone" && (
                <div className="space-y-4 mt-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <Label htmlFor="vodafoneNumber">Vodafone Cash Number</Label>
                    <Input
                      id="vodafoneNumber"
                      required
                      placeholder="Enter your Vodafone Cash number"
                      value={formData.vodafoneNumber || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          vodafoneNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="vodafoneOTP">OTP</Label>
                    <Input
                      id="vodafoneOTP"
                      required
                      placeholder="Enter the OTP sent to your phone"
                      value={formData.vodafoneOTP || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          vodafoneOTP: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              )}
            </div>

            <Button type="submit" className="w-full">
              Place Order
            </Button>
          </form>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-4">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
