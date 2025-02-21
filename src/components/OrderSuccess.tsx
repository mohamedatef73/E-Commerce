import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-500" />
        <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. We'll send you an email with your order
          details.
        </p>
        <Button onClick={() => navigate("/")}>Continue Shopping</Button>
      </div>
    </div>
  );
}
