import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import TelegramWidget from "./components/TelegramWidget";
import Home from "./pages/Home";
import Subscriptions from "./pages/Subscriptions";
import Payment from "./pages/Payment";
import Instruction from "./pages/Instruction";
import NotFound from "./pages/NotFound";
import { useTelegram } from "./hooks/useTelegram";
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
  const { user, isLoading } = useTelegram();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-text-primary">Загрузка...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <Navigation currentPath={location.pathname} />
      
      <main className="relative z-10 pb-60 px-4">
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/subscriptions" element={<Subscriptions user={user} />} />
          <Route path="/payment" element={<Payment user={user} />} />
          <Route path="/instruction" element={<Instruction user={user} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <TelegramWidget />
    </div>
  );
}
