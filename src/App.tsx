import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "./components/Navbar";


function App() {
  return (
    <div className="relative bg-slate-800 min-h-screen flex justify-center items-center">
      <div
        style={{
          backgroundImage: "url(/Background.png)", 
          backgroundSize: "contain", 
          backgroundPosition: "center",
        }}
        className="relative mobile-view w-full max-w-[505px] min-h-screen bg-cream overflow-y-auto overflow-x-hidden"
      >
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
