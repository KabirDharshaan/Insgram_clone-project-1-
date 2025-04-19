import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Memories = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [memories, setMemories] = useState([]);

  const handleAddMemory = () => {
    if (imageUrl.trim()) {
      setMemories([...memories, imageUrl]);
      setImageUrl('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-200 to-rose-300 flex flex-col items-center justify-start p-6 overflow-x-hidden">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-rose-700 mb-8 font-[cursive] text-center"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 90 }}
      >
        💞 Memory Lane 💞
      </motion.h1>

      {/* Add Memory Section */}
      <motion.div 
        className="w-full max-w-xl bg-white rounded-3xl shadow-xl p-6 mb-10 bg-opacity-90 backdrop-blur-sm border border-rose-200"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <input
          type="text"
          placeholder="Paste an image URL from your memories 💌"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full p-3 rounded-xl border border-rose-300 text-rose-700 placeholder-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
        />
        <button
          onClick={handleAddMemory}
          className="mt-4 w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold py-2 px-4 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg"
        >
          Add Memory 📷
        </button>
      </motion.div>

      {/* Memories Display */}
      <div className="w-full max-w-4xl flex flex-col gap-6 items-center">
        <AnimatePresence>
          {memories.map((url, index) => (
            <motion.div
              key={index}
              className="w-full bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center border border-rose-100 bg-opacity-90 backdrop-blur-sm"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
            >
              <img
                src={url}
                alt={`memory-${index}`}
                className="rounded-xl w-full max-h-[500px] object-contain border-2 border-rose-200"
              />
              <p className="text-sm text-rose-500 mt-2">Memory #{index + 1}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Memories;
