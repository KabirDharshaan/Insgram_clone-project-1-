
import React, { useMemo } from "react";
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

// 🌈 Gradient background options
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
  "calendar",
  "Love Letters",
  "Things I Love About You",
  " Playlist",
  "Thalapathy Moments",
  "Cat Love Zone",
  "Nature Bliss",
  "Foodie Gallery",
];

const links = [
  "/bucket",
  "/calendar",
  "/letters",
  "/likes",
  "/songs",
  "/vijay",
  "/cats",
  "/nature",
  "/food",
];

const Gift = () => {
  // 🧠 UseMemo to keep sparkles consistent on every render
  const sparkles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 5,
    }));
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-8 overflow-hidden">
      {/* ✨ Sparkles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {sparkles.map((s) => (
          <motion.div
            key={s.id}
            className="absolute w-3 h-3 rounded-full bg-white opacity-20 blur-xl"
            style={{ top: s.top, left: s.left }}
            animate={{ y: -1000 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: s.duration,
            }}
          />
        ))}
      </div>

      {/* 🪄 Title */}
      <motion.h1
        className="text-center text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 mb-16 z-10 relative drop-shadow-2xl"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        💖 Anime-Inspired Magical Gifts 💖
      </motion.h1>

      {/* 🪬 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto z-10 relative">
        {titles.map((title, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, type: "spring", stiffness: 120 }}
            className={`p-6 rounded-3xl backdrop-blur-md bg-gradient-to-br ${backgroundColors[index % backgroundColors.length]} shadow-2xl hover:shadow-white/30 ring-2 ring-white/20 cursor-pointer transition-all duration-300 hover:-translate-y-2`}
          >
            <Link to={links[index]}>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-pink-700 animate-pulse drop-shadow-xl">
                  {icons[index]}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-pink-800">
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

















