import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { FoodDetails } from "./FoodDetails";
import { StartCooking } from "./StartCooking";


function App() {
  return (
    <div className="relative bg-slate-800 min-h-screen flex justify-center items-center">
      <div
        className="relative mobile-view w-full max-w-[505px] min-h-screen overflow-y-auto overflow-x-hidden "
        
      >
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foodDetails" element={<FoodDetails />} />
          <Route path="/startCooking" element={<StartCooking />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
