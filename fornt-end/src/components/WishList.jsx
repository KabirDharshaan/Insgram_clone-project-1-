

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const WishList = () => {
  const [wish, setWish] = useState('');
  const [wishes, setWishes] = useState([]);

  // Fetch wishes from the backend
  useEffect(() => {
    fetch('http://localhost:5000/api/wishes')
      .then((response) => response.json())
      .then((data) => setWishes(data))
      .catch((err) => console.error('Error fetching wishes:', err));

    // Automatically play the audio when the component is loaded
    const audio = new Audio('https://www.bensound.com/bensound-music/bensound-love.mp3');
    audio.loop = true;  // Loop the audio
    audio.play(); // Start playing the audio when the component loads

    return () => {
      audio.pause(); // Pause the audio when the component is unmounted
    };
  }, []);  // Empty array ensures it only runs once after the component is mounted

  // Add a new wish to the backend
  const handleAddWish = () => {
    if (wish.trim()) {
      fetch('http://localhost:5000/api/wishes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ wish }),
      })
        .then((response) => response.json())
        .then((newWish) => {
          setWishes([...wishes, newWish]);
          setWish('');
        })
        .catch((err) => console.error('Error adding wish:', err));
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-100 via-pink-200 to-rose-300 flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* 💖 Background Hearts Animation */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-rose-400 opacity-40"
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, fontSize: `${Math.random() * 24 + 12}px` }}
          animate={{ y: ['0%', '100%'], opacity: [0.8, 0] }}
          transition={{ duration: Math.random() * 10 + 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          💗
        </motion.div>
      ))}

      {/* 🎵 Background Music (audio is handled by useEffect now) */}
      {/* The audio element is no longer necessary here since it's managed by useEffect */}

      {/* 💬 Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-rose-700 mb-6 font-[cursive] text-center drop-shadow-md"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        💖 Your Magical Wishlist 💖
      </motion.h1>

      {/* ✍️ Input Section */}
      <motion.div
        className="bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-2xl p-6 w-full max-w-xl mb-6 border border-rose-200"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          placeholder="karnika add ur wish ✨..."
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          className="w-full p-4 rounded-xl border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400 text-rose-700 placeholder-rose-300 text-lg"
        />
        <button
          onClick={handleAddWish}
          className="mt-4 w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-300 shadow-xl"
        >
          Add Wish 💌
        </button>
      </motion.div>

      {/* 🌸 Wish List Display */}
      <div className="w-full max-w-xl space-y-4 overflow-y-auto max-h-[50vh] scrollbar-thin scrollbar-thumb-rose-300">
        <AnimatePresence>
          {wishes.map((w, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg p-4 flex items-center space-x-3 border border-rose-200"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 70 }}
            >
              <FaHeart className="text-rose-500" />
              <p className="text-rose-700 font-medium">{w.wish}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WishList;
