

// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WishPage from "./pages/WishPage";
import Gift from "./pages/gift";
import BucketList from "./components/bucketList";
import FoodGallery from "./components/FoodGallery";
import Calendar from "./components/Calander";
import Songs from "./components/Songs";
import Yuvan from "./songs/yuvan"; // ✅ Import the Yuvan page
import Wish from "./components/WishList";
import Memories from "./components/memories";
import Indian from "./cusines/indian"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WishPage />} />
        <Route path="/gifts" element={<Gift />} />
        <Route path="/bucket" element={<BucketList />} />
        <Route path="/food" element={<FoodGallery />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/songs/yuvan" element={<Yuvan />} /> {/* ✅ New route for Yuvan songs */}
        <Route path="/wish" element={<Wish />} />
        <Route path="/memory" element={<Memories />} />
        <Route path="/india" element={<Indian />} />
      </Routes>
    </Router>
  );
}

export default App;
