




import React, { useEffect, useRef, useState } from "react";

// Import songs directly since they're inside src folder
import song1 from "../songslist/harrishits/Irandaam Ulagam - Kani Mozhiyae Video _ Arya, Anushka.mp3";
import song2 from "../songslist/harrishits/Karu Karu Vizhigalal - 4K Video _ கரு கரு _ Pachaikili Muthucharam _ Sarath Kumar _ Harris Jayaraj.mp3";
import song3 from "../songslist/harrishits/Ko - Amali Thumali Video _ Jiiva, Karthika _ Harris.mp3";
import song4 from "../songslist/harrishits/Maattrraan - Naani Koni Video _ Suriya, Kajal Agarwal.mp3";
import song5 from "../songslist/harrishits/Manjal Veyil - மஞ்சள் வெயில் - 4K Video Song _ Vettaiyaadu Vilaiyaadu _ Kamal _ GVM _Harris Jayaraj.mp3";
import song6 from "../songslist/harrishits/Vaaranam Aayiram - Nenjukkul Peidhidum Video _ Harris Jayaraj _ Suriya.mp3";

// Add more songs as needed
const songList = [
  {
    name: "Kani Mozhiyae - Irandaam Ulagam",
    src: song1,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Chennai_Express_-_Lungi_Dance.jpg/220px-Chennai_Express_-_Lungi_Dance.jpg",
  },
  {
    name: "Karu Karu Vizhigalal - Pachaikili Muthucharam",
    src: song2,
    image: "https://i.ytimg.com/vi/H7ZwIPCfWBw/maxresdefault.jpg",
  },
  {
    name: "Amali Thumali - Ko ",
    src: song3,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Why_This_Kolaveri_Di.jpg/220px-Why_This_Kolaveri_Di.jpg",
  },
  {
    name: "Naani Koni - Maattrraan  ",
    src: song4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Pooveli_Pooveli_album_cover.jpg/220px-Pooveli_Pooveli_album_cover.jpg",
  },
  {
    name: "Manjal Veyil - Vettaiyaadu Vilaiyaadu ",
    src: song5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Vada_Bin_Lada.jpg/220px-Vada_Bin_Lada.jpg",
  },
  {
    name: "Nenjukkul Peidhidum - Vaaranam Aayiram",
    src: song6,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Enna_Solla_%28song%29.jpg/220px-Enna_Solla_%28song%29.jpg",
  },

  // Add more songs as needed
];

export default function Harris() {
  const [songIndex, setSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current
        .play()
        .then(() => {})
        .catch((err) => console.log("Error playing audio:", err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, songIndex]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setSongIndex((prev) => (prev + 1) % songList.length);
    setIsPlaying(false); // Reset to avoid play() interruption
    setTimeout(() => setIsPlaying(true), 100); // Play next
  };

  const handlePrev = () => {
    setSongIndex((prev) => (prev - 1 + songList.length) % songList.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 100);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-orange-400 to-yellow-400">
      {/* Sidebar */}
      <div className="w-1/4 bg-[#121E2D] text-white p-6 rounded-l-xl">
        <h1 className="text-2xl font-bold mb-6">Harris Hits</h1>
        <ul className="space-y-4">
          {songList.map((song, index) => (
            <li
              key={index}
              className={`cursor-pointer ${songIndex === index ? 'text-yellow-400' : ''}`}
              onClick={() => setSongIndex(index)}
            >
              {song.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Player */}
      <div className="w-3/4 p-10 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center bg-white p-8 rounded-xl shadow-xl">
          <img
            src={songList[songIndex].image}
            alt={songList[songIndex].name}
            className="w-64 h-64 rounded-xl shadow-lg mb-6"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{songList[songIndex].name}</h2>

          <audio ref={audioRef} src={songList[songIndex].src} />
          <div className="flex items-center gap-8 mt-4">
            <button
              onClick={handlePrev}
              className="text-2xl bg-white text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200"
            >
              ⏮️
            </button>

            <button
              onClick={handlePlayPause}
              className="text-2xl bg-yellow-600 text-white px-6 py-2 rounded-full hover:bg-yellow-700"
            >
              {isPlaying ? "⏸️ Pause" : "▶️ Play"}
            </button>

            <button
              onClick={handleNext}
              className="text-2xl bg-white text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200"
            >
              ⏭️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
