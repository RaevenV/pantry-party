import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";


function App() {
  
  return (
    <div className="relative home-container bg-slate-600 min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App
