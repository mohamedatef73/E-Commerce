import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Checkout from "./components/Checkout";
import OrderSuccess from "./components/OrderSuccess";
import routes from "tempo-routes";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </>
      </Suspense>
    </CartProvider>
  );
}

export default App;
