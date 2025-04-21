

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// import img1 from '../assets/1000000068.jpg';
// import img2 from '../assets/1000000071.jpg';
// import img3 from '../assets/1000000089.jpg';
// import img4 from '../assets/WhatsApp Image 2024-09-06 at 19.42.31_a5aee448.jpg';
// import img5 from '../assets/WhatsApp Image 2024-09-09 at 08.09.04_454d9825.jpg';
// import img6 from  '../assets/IMG_20240417_001041[1].jpg';
// import img7 from  '../assets/IMG_20241015_231244[1].jpg'
// const decorativeGradients = [
//   'from-pink-200 to-yellow-100',
//   'from-rose-300 to-indigo-100',
//   'from-purple-200 to-rose-100',
//   'from-amber-200 to-pink-200',
//   'from-lime-100 to-rose-200'
// ];

// const Memories = () => {
//   const [imageUrl, setImageUrl] = useState('');
//   const [memories, setMemories] = useState([img1, img2, img3, img4, img5,img6,img7]);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleAddMemory = () => {
//     if (imageUrl.trim()) {
//       setMemories([...memories, imageUrl]);
//       setImageUrl('');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-purple-100 flex flex-col items-center justify-start p-6 overflow-x-hidden">
//       <motion.h1 
//         className="text-5xl font-bold text-rose-700 mb-10 font-[cursive] text-center drop-shadow-xl"
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ type: 'spring', stiffness: 80 }}
//       >
//         🦋💖 Memory Lane 💖🌸
//       </motion.h1>

//       {/* Add Memory */}
//       <motion.div 
//         className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-6 mb-10 bg-opacity-90 backdrop-blur-sm border border-rose-300"
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <input
//           type="text"
//           placeholder="Paste image URL or import path... 📷"
//           value={imageUrl}
//           onChange={(e) => setImageUrl(e.target.value)}
//           className="w-full p-3 rounded-xl border border-rose-300 text-rose-700 placeholder-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
//         />
//         <button
//           onClick={handleAddMemory}
//           className="mt-4 w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold py-2 px-4 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg"
//         >
//           Add Memory 📸
//         </button>
//       </motion.div>

//       {/* Memory Grid */}
//       <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
//         <AnimatePresence>
//           {memories.map((url, index) => {
//             const gradient = decorativeGradients[index % decorativeGradients.length];
//             return (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setSelectedImage(url)}
//                 className={`cursor-pointer relative w-full h-[400px] rounded-3xl shadow-2xl overflow-hidden border-4 border-white bg-gradient-to-br ${gradient}`}
//                 initial={{ opacity: 0, y: 60 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -60 }}
//                 transition={{ duration: 0.6, type: 'spring' }}
//               >
//                 <img
//                   src={url}
//                   alt={`memory-${index}`}
//                   className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700 ease-in-out saturate-[1.3]"
//                 />
//                 <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/70 text-pink-600 font-bold shadow-md text-sm backdrop-blur-sm">
//                   🌹 Memory #{index + 1}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>
//       </div>

//       {/* Image Modal */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-md"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImage(null)}
//           >
//             <motion.img
//               src={selectedImage}
//               alt="Enlarged Memory"
//               className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl border-4 border-white"
//               initial={{ scale: 0.7, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.7, opacity: 0 }}
//               transition={{ type: 'spring', stiffness: 80, damping: 15 }}
//               onClick={(e) => e.stopPropagation()}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Memories;











import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

import img1 from '../assets/1000000068.jpg';
import img2 from '../assets/1000000071.jpg';
import img3 from '../assets/1000000089.jpg';
import img4 from '../assets/WhatsApp Image 2024-09-06 at 19.42.31_a5aee448.jpg';
import img5 from '../assets/WhatsApp Image 2024-09-09 at 08.09.04_454d9825.jpg';
import img6 from '../assets/IMG_20240417_001041[1].jpg';
import img7 from '../assets/IMG_20241015_231244[1].jpg';

const decorativeGradients = [
  'from-pink-200 to-yellow-100',
  'from-rose-300 to-indigo-100',
  'from-purple-200 to-rose-100',
  'from-amber-200 to-pink-200',
  'from-lime-100 to-rose-200'
];

const Memories = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [imageLabel, setImageLabel] = useState('');
  const [memories, setMemories] = useState([
    { url: img1, label: "First Snap" },
    { url: img2, label: "Golden Vibe" },
    { url: img3, label: "Soft Smile" },
    { url: img4, label: "Fav Outfit" },
    { url: img5, label: "Dreamy Mood" },
    { url: img6, label: "Classic Beauty" },
    { url: img7, label: "Cute Side" }
  ]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleAddMemory = () => {
    if (imageUrl.trim()) {
      setMemories([...memories, { url: imageUrl, label: imageLabel || `Memory ${memories.length + 1}` }]);
      setImageUrl('');
      setImageLabel('');
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }
  };

  const toggleFavorite = (index) => {
    setFavorites((prev) =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-purple-100 flex flex-col items-center justify-start p-6 overflow-x-hidden font-[cursive]">
      <motion.h1 
        className="text-5xl font-bold text-rose-700 mb-10 drop-shadow-xl text-center"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80 }}
      >
        🦋💖 Memory Lane 💖🌸
      </motion.h1>

      <motion.div 
        className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-6 mb-10 bg-opacity-90 backdrop-blur-sm border border-rose-300"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          placeholder="Paste image URL... 📷"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full p-3 rounded-xl border border-rose-300 text-rose-700 placeholder-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
        />
        <input
          type="text"
          placeholder="Add a sweet label... ✨"
          value={imageLabel}
          onChange={(e) => setImageLabel(e.target.value)}
          className="w-full p-3 mt-3 rounded-xl border border-rose-300 text-rose-700 placeholder-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
        />
        <button
          onClick={handleAddMemory}
          className="mt-4 w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold py-2 px-4 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg"
        >
          Add Memory 📸
        </button>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        <AnimatePresence>
          {memories.map((memory, index) => {
            const gradient = decorativeGradients[index % decorativeGradients.length];
            const isFavorite = favorites.includes(index);

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(memory.url)}
                className={`cursor-pointer relative w-full h-[400px] rounded-3xl shadow-2xl overflow-hidden border-4 border-white bg-gradient-to-br ${gradient} animate-floating`}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -60 }}
                transition={{ duration: 0.6, type: 'spring' }}
              >
                <img
                  src={memory.url}
                  alt={`memory-${index}`}
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700 ease-in-out saturate-[1.3]"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/70 text-pink-600 font-bold shadow-md text-sm backdrop-blur-sm">
                  🌹 {memory.label}
                </div>
                <motion.button
                  onClick={(e) => { e.stopPropagation(); toggleFavorite(index); }}
                  whileTap={{ scale: 0.9 }}
                  className={`absolute top-3 right-3 text-2xl p-2 rounded-full bg-white/70 shadow hover:scale-110 transition-all ${
                    isFavorite ? 'text-red-500' : 'text-gray-400'
                  }`}
                >
                  {isFavorite ? '❤️' : '🤍'}
                </motion.button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Modal for Full Image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged Memory"
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl border-4 border-white"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 80, damping: 15 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Memories;










