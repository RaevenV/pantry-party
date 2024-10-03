import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "./components/Navbar";
import { FoodDetails } from "./FoodDetails";


function App() {
  return (
    <div className="relative bg-slate-800 min-h-screen flex justify-center items-center">
      <div className="relative mobile-view w-full max-w-[505px] min-h-screen bg-cream overflow-y-auto overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foodDetails" element={<FoodDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
