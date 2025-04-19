



import React, { useEffect, useRef, useState } from "react";

// Import songs directly since they're inside src folder
import song1 from "../songslist/yuvanhits/Anjaan - Kadhal Aasai Lyric _ Suriya, Samantha _ Yuvan.mp3";
import song2 from "../songslist/yuvanhits/Paiya - Adada Mazhaida Video _ Karthi, Tamannah _ Yuvan Shankar Raja.mp3";
import song3 from "../songslist/yuvanhits/Paiya - En Kadhal Solla Tamil Lyric _ Yuvanshankar Raja _ Karthi, Tamannaah.mp3";

const songList = [
  {
    name: "Kadhal Aasai - Anjaan",
    src: song1,
    image: "https://c-fa.cdn.smule.com/rs-s79/arr/9e/33/c4371670-6018-4af5-a86e-4667a5f52021.jpg",
  },
  {
    name: "Adada Mazhaida - Paiya",
    src: song2,
    image: "/songlist/4aeb3351-bce7-4927-9a5e-46701862c6bd.png",
  },
  {
    name: "En Kadhal Solla - Paiya",
    src: song3,
    image: "/songlist/4aeb3351-bce7-4927-9a5e-46701862c6bd.png",
  },
];

export default function Yuvan() {
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
    <div className="min-h-screen flex bg-gradient-to-r from-cyan-400 to-green-400">
      {/* Sidebar */}
      <div className="w-1/4 bg-[#121E2D] text-white p-6 rounded-l-xl">
        <h1 className="text-2xl font-bold mb-6">Yuvan Hits</h1>
        <ul className="space-y-4">
          <li className="text-lg text-green-400 font-semibold">Yuvan Hits</li>
          <li className="text-lg cursor-pointer hover:text-blue-400">Harris Hits</li>
          <li className="text-lg cursor-pointer hover:text-blue-400">Ilayaraja Classics</li>
          <li className="text-lg cursor-pointer hover:text-blue-400">AR Rahman Tunes</li>
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
              className="text-2xl bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700"
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
