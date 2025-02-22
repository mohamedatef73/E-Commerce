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
        {/* Tempo routes */}
        {import.meta.env.VITE_TEMPO && useRoutes(routes)}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          {/* Add this before the catchall route */}
          {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
        </Routes>
      </Suspense>
    </CartProvider>
  );
}

export default App;
