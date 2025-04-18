// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WishPage from "./pages/WishPage";
import Gift from "./pages/gift";
import BucketList from "./components/bucketList"; // Import the BucketList component

// Import other components here...

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WishPage />} />
        <Route path="/gifts" element={<Gift />} />
        <Route path="/bucket" element={<BucketList />} /> {/* Route for BucketList */}

        {/* Add routes for other pages here */}
      </Routes>
    </Router>
  );
}

export default App;
