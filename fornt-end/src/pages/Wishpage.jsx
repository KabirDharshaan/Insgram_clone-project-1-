

import { motion } from "framer-motion";
import { SparklesIcon, HeartIcon, StarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WishPage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-pink-100 via-purple-200 to-blue-100 flex flex-col items-center justify-center px-4 text-center font-sans">

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400 opacity-70"
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          initial={{ y: 0 }}
          animate={{ y: -1000 }}
          transition={{ duration: Math.random() * 10 + 5, repeat: Infinity, ease: "linear" }}
        >
          <HeartIcon size={24} />
        </motion.div>
      ))}

      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute text-yellow-300 opacity-50"
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}
        >
          <StarIcon size={16} />
        </motion.div>
      ))}

      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-pink-700 drop-shadow-lg z-10"
      >
        🎂 Happy Birthday Karnika! 🎂
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-6 text-lg md:text-xl max-w-2xl text-gray-800 font-medium z-10"
      >
        May your day be filled with magical vibes, joy, and surprises that light up your soul. 🌈 You are truly one of a kind, and I hope this year brings you everything your heart desires. 💖🎁
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-10 z-10"
      >
        <SparklesIcon size={80} className="text-yellow-500 animate-pulse" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="mt-12 bg-white bg-opacity-70 backdrop-blur-md rounded-2xl p-6 shadow-xl max-w-xl z-10"
      >
        <p className="text-pink-600 font-semibold text-xl">
          "The world is brighter because you're in it, Karnika. Keep glowing like the star you are ✨"
        </p>
      </motion.div>

      {/* 🎁 SURPRISE BUTTON */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-10 px-6 py-3 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition-all z-10"
        onClick={() => navigate("/gifts")}
      >
        🎁 Tap for a surprise!
      </motion.button>

      {/* 🎊 Confetti effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="animate-pulse text-[100px] text-pink-200 absolute top-[40%] left-[45%]">
            🎊
          </div>
        </div>
      )}
    </div>
  );
};

export default WishPage;
