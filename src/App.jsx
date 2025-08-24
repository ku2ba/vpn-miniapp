import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import TelegramWidget from "./components/TelegramWidget";
import Home from "./pages/Home";
import Subscriptions from "./pages/Subscriptions";
import Payment from "./pages/Payment";
import Instruction from "./pages/Instruction";
import NotFound from "./pages/NotFound";
import "./App.css";

export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <Navigation currentPath={location.pathname} />
      
      <main className="relative z-10 pb-60 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/instruction" element={<Instruction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <TelegramWidget />
    </div>
  );
}
