import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
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
    <div className="app-container bg-gradient-to-br from-pink-50 via-purple-50 to-mint-50 min-h-screen font-sans">
      <Navbar currentPath={location.pathname} />
      <TelegramWidget />
      <div className="page-container max-w-3xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/instruction" element={<Instruction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
