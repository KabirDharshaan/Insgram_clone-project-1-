


// import { motion } from "framer-motion";
// import {
//   CalendarDays,
//   Music2,
//   Heart,
//   Star,
//   Cat,
//   Leaf,
//   BookText,
//   UtensilsCrossed,
//   Film,
// } from "lucide-react";

// // 🌟 Gradient sparkle backgrounds
// const backgroundColors = [
//   "from-[#fbc2eb] via-[#a6c1ee] to-[#fbc2eb]",
//   "from-[#ffecd2] via-[#fcb69f] to-[#ffecd2]",
//   "from-[#a1c4fd] via-[#c2e9fb] to-[#a1c4fd]",
//   "from-[#f6d365] via-[#fda085] to-[#f6d365]",
//   "from-[#ff9a9e] via-[#fad0c4] to-[#ff9a9e]",
//   "from-[#c1dfc4] via-[#deecdd] to-[#c1dfc4]",
//   "from-[#fbc2eb] via-[#a18cd1] to-[#fbc2eb]",
//   "from-[#84fab0] via-[#8fd3f4] to-[#84fab0]",
//   "from-[#fccb90] via-[#d57eeb] to-[#fccb90]",
// ];

// const icons = [
//   <Star size={44} />,
//   <CalendarDays size={44} />,
//   <BookText size={44} />,
//   <Heart size={44} />,
//   <Music2 size={44} />,
//   <Film size={44} />,
//   <Cat size={44} />,
//   <Leaf size={44} />,
//   <UtensilsCrossed size={44} />,
// ];

// const titles = [
//   "Bucket List",
//   "Important Dates",
//   "Love Letters",
//   "Things I Love About You",
//   "Yuvan Playlist",
//   "Thalapathy Moments",
//   "Cat Love Zone",
//   "Nature Bliss",
//   "Foodie Gallery",
// ];

// const links = [
//   "/bucket",
//   "/calendar",
//   "/letters",
//   "/likes",
//   "/yuvan",
//   "/vijay",
//   "/cats",
//   "/nature",
//   "/food",
// ];

// const Gift = () => {
//   return (
//     <div className="min-h-screen relative bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-8 overflow-hidden">
//       {/* Bokeh Background Sparkles */}
//       <div className="absolute inset-0 overflow-hidden z-0">
//         {[...Array(40)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-3 h-3 rounded-full bg-white opacity-30 blur-xl"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animationDuration: `${Math.random() * 20 + 10}s`,
//             }}
//             animate={{ y: -1000 }}
//             transition={{
//               repeat: Infinity,
//               ease: "linear",
//               duration: Math.random() * 10 + 5,
//             }}
//           />
//         ))}
//       </div>

//       <motion.h1
//         className="text-center text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 mb-16 relative z-10 drop-shadow-2xl"
//         initial={{ opacity: 0, y: -60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2 }}
//       >
//         💖 Anime-Inspired Magical Gifts 💖
//       </motion.h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto z-10 relative">
//         {titles.map((title, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05, rotateY: 5 }}
//             whileTap={{ scale: 0.95 }}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: index * 0.1 }}
//             className={`p-6 rounded-3xl backdrop-blur-md bg-gradient-to-br ${backgroundColors[index % backgroundColors.length]} shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] ring-2 ring-white/30 cursor-pointer transform-gpu transition-all duration-300 hover:-translate-y-2`}
//             onClick={() => (window.location.href = links[index])}
//           >
//             <div className="flex flex-col items-center text-center space-y-4">
//               <div className="text-pink-700 animate-pulse drop-shadow-xl">
//                 {icons[index]}
//               </div>
//               <h2 className="text-2xl font-bold text-pink-800 drop-shadow-sm">
//                 {title}
//               </h2>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gift;










import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Music2,
  Heart,
  Star,
  Cat,
  Leaf,
  BookText,
  UtensilsCrossed,
  Film,
} from "lucide-react";

// 🌟 Gradient sparkle backgrounds
const backgroundColors = [
  "from-[#fbc2eb] via-[#a6c1ee] to-[#fbc2eb]",
  "from-[#ffecd2] via-[#fcb69f] to-[#ffecd2]",
  "from-[#a1c4fd] via-[#c2e9fb] to-[#a1c4fd]",
  "from-[#f6d365] via-[#fda085] to-[#f6d365]",
  "from-[#ff9a9e] via-[#fad0c4] to-[#ff9a9e]",
  "from-[#c1dfc4] via-[#deecdd] to-[#c1dfc4]",
  "from-[#fbc2eb] via-[#a18cd1] to-[#fbc2eb]",
  "from-[#84fab0] via-[#8fd3f4] to-[#84fab0]",
  "from-[#fccb90] via-[#d57eeb] to-[#fccb90]",
];

const icons = [
  <Star size={44} />,
  <CalendarDays size={44} />,
  <BookText size={44} />,
  <Heart size={44} />,
  <Music2 size={44} />,
  <Film size={44} />,
  <Cat size={44} />,
  <Leaf size={44} />,
  <UtensilsCrossed size={44} />,
];

const titles = [
  "Bucket List",
  "Important Dates",
  "Love Letters",
  "Things I Love About You",
  "Yuvan Playlist",
  "Thalapathy Moments",
  "Cat Love Zone",
  "Nature Bliss",
  "Foodie Gallery",
];

const links = [
  "/bucket", // This will lead to the Bucket List page
  "/calendar",
  "/letters",
  "/likes",
  "/yuvan",
  "/vijay",
  "/cats",
  "/nature",
  "/food",
];

const Gift = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-8 overflow-hidden">
      {/* Bokeh Background Sparkles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-white opacity-30 blur-xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 10}s`,
            }}
            animate={{ y: -1000 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: Math.random() * 10 + 5,
            }}
          />
        ))}
      </div>

      <motion.h1
        className="text-center text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 mb-16 relative z-10 drop-shadow-2xl"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        💖 Anime-Inspired Magical Gifts 💖
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto z-10 relative">
        {titles.map((title, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-3xl backdrop-blur-md bg-gradient-to-br ${backgroundColors[index % backgroundColors.length]} shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] ring-2 ring-white/30 cursor-pointer transform-gpu transition-all duration-300 hover:-translate-y-2`}
          >
            <Link to={links[index]}>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-pink-700 animate-pulse drop-shadow-xl">
                  {icons[index]}
                </div>
                <h2 className="text-2xl font-bold text-pink-800 drop-shadow-sm">
                  {title}
                </h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gift;

