


// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WishPage from "./pages/WishPage";
import Gift from "./pages/gift";
import BucketList from "./components/bucketList";
import FoodGallery from "./components/FoodGallery"; // ✅ Import FoodGallery
import Calendar from "./components/Calander";
import Songs from "./components/Songs";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WishPage />} />
        <Route path="/gifts" element={<Gift />} />
        <Route path="/bucket" element={<BucketList />} />
        <Route path="/food" element={<FoodGallery />} /> {/* ✅ Route added */}
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/songs" element={<Songs />} />
      </Routes>
    </Router>
  );
}

export default App;

