

// // src/App.jsx
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import WishPage from "./pages/WishPage";
// import Gift from "./pages/gift";
// import BucketList from "./components/bucketList";
// import FoodGallery from "./components/FoodGallery";
// import Calendar from "./components/Calander";
// import Songs from "./components/Songs";
// import Yuvan from "./songs/yuvan"; // ✅ Import the Yuvan page
// import Wish from "./components/WishList";
// import Memories from "./components/memories";
// import Indian from "./cusines/indian"
// import Italian from "./cusines/italian"
// import Mexican from "./cusines/Mexican"
// import Thai from "./cusines/Thai"
// import China from "./cusines/China"
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<WishPage />} />
//         <Route path="/gifts" element={<Gift />} />
//         <Route path="/bucket" element={<BucketList />} />
//         <Route path="/food" element={<FoodGallery />} />
//         <Route path="/calendar" element={<Calendar />} />
//         <Route path="/songs" element={<Songs />} />
//         <Route path="/songs/yuvan" element={<Yuvan />} /> {/* ✅ New route for Yuvan songs */}
//         <Route path="/wish" element={<Wish />} />
//         <Route path="/memory" element={<Memories />} />
//         <Route path="/india" element={<Indian />} />
//         <Route path="/italy" element={<Italian />} />
//         <Route path="/mexico" element={<Mexican />} />
//         <Route path="/thailand" element={<Thai />} />
//         <Route path="/china" element={<China />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;






















// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WishPage from "./pages/WishPage";
import Gift from "./pages/gift";
import BucketList from "./components/bucketList";
import FoodGallery from "./components/FoodGallery";
import Calendar from "./components/Calander";
import Songs from "./components/Songs";
import Yuvan from "./songs/yuvan"; // ✅ Import the Yuvan page
import Harris from "./songs/Harris"; // ✅ Import the Harris page
import Wish from "./components/WishList";
import Memories from "./components/memories";
import Indian from "./cusines/indian";
import Italian from "./cusines/italian";
import Mexican from "./cusines/Mexican";
import Thai from "./cusines/Thai";
import China from "./cusines/China";

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
        <Route path="/songs/yuvan" element={<Yuvan />} /> {/* Yuvan page */}
        <Route path="/songs/Harris" element={<Harris />} /> {/* Harris page */}
        <Route path="/wish" element={<Wish />} />
        <Route path="/memory" element={<Memories />} />
        <Route path="/india" element={<Indian />} />
        <Route path="/italy" element={<Italian />} />
        <Route path="/mexico" element={<Mexican />} />
        <Route path="/thailand" element={<Thai />} />
        <Route path="/china" element={<China />} />
      </Routes>
    </Router>
  );
}

export default App;
