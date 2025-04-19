



import React, { useEffect, useRef, useState } from "react";

// Import songs directly since they're inside src folder
import song1 from "../songslist/yuvanhits/Anjaan - Kadhal Aasai Lyric _ Suriya, Samantha _ Yuvan.mp3";
import song2 from "../songslist/yuvanhits/Paiya - Adada Mazhaida Video _ Karthi, Tamannah _ Yuvan Shankar Raja.mp3";
import song3 from "../songslist/yuvanhits/Paiya - En Kadhal Solla Tamil Lyric _ Yuvanshankar Raja _ Karthi, Tamannaah.mp3";
import song4 from "../songslist/yuvanhits/Paiya - Thuli Thuli Tamil Lyric _ Yuvanshankar Raja _ Karthi, Tamannaah.mp3";
import song5 from "../songslist/yuvanhits/Paiya - Yedho Ondru Ennai Video _ Karthi, Tamannah _ Yuvan Shankar Raja.mp3";
import song6 from "../songslist/yuvanhits/Yaaradi Nee Mohini - Oru Naalaikkul Video _ Dhanush _ Yuvanshankar Raja.mp3";
import song7 from "../songslist/yuvanhits/கோவா - இது வரை தமிழ் பாடல் வரிகள் _ யுவன் சங்கர் ராஜா.mp3"
import song8 from "../songslist/yuvanhits/Arrambam - En Fuse Pochu Video _ Arya, Tapsee.mp3";
import song9 from "../songslist/yuvanhits/Klesa Kadhala - Video Song _ Dada _ Kavin _ Aparna Das _ Jen Martin _ Ganesh K Babu _ Olympia Movies.mp3";
import song10 from "../songslist/yuvanhits/Love Today - Ennai Vittu Video _ Pradeep Ranganathan _ Yuvan Shankar Raja _ AGS.mp3"
import song11 from "../songslist/yuvanhits/NGK - Anbae Peranbae Video _ Suriya _ Yuvan Shankar Raja _ Selvaraghavan.mp3"
import song12 from "../songslist/yuvanhits/Oru Kal Oru Kannadi - Video Song _ Siva Manasula Sakthi _ Yuvan Shankar Raja _ Jiiva _ Sun Music.mp3"
import song13 from "../songslist/yuvanhits/Pogathey Video Song _ Dada _ Kavin _ Aparna Das _ Yuvan Shankar Raja _ Jen Martin _ Ganesh K Babu.mp3"
const songList = [
  {
    name: "Kadhal Aasai - Anjaan",
    src: song1,
    image: "https://i1.wp.com/www.chennaikaaran.com/wp-content/uploads/2016/08/yuvan.jpg?fit=1024%2C768&ssl=1",
  },
  {
    name: "Adada Mazhaida - Paiya",
    src: song2,
    image: "https://i.scdn.co/image/ab67616d0000b2737de8959929372430846f570e",
  },
  {
    name: "En Kadhal Solla - Paiya",
    src: song3,
    image: "https://i.ytimg.com/vi/61U0e-i4jSw/maxresdefault.jpg",
  },
  {
    name: "Thuli Thuli - Paiya",
    src: song4,
    image: "https://tamillyrics143.com/wp-content/uploads/2019/02/Thuli-Thuli-Mazhaiyaai-Song-Lyrics.jpg",
  },
  {
    name: "Yetho Ondru Ennai- Paiya",
    src: song5,
    image: "https://i.ytimg.com/vi/g1nl1x9ryNE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AG-B4AC0AWKAgwIABABGD0gVihlMA8=&rs=AOn4CLBrkIS9lVGCjt-rQH548RZFk1dHrw",
  },
  {
    name: "Oru Naalaikkul- Yaaradi Nee Mohini",
    src: song6,
    image: "https://tse3.mm.bing.net/th?id=OIP.cr5eBF9ZXRs6RFqdBvkFKgHaEK&pid=Api&P=0&h=180",
  },
  {
    name: "Ithuvarai - Goa",
    src: song7,
    image: "https://c.saavncdn.com/260/Goa-Tamil-2010-20210522185821-500x500.jpg",
  },
  {
    name: "En Fuse Pochu - Arrambam",
    src: song8,
    image: "https://i.pinimg.com/originals/50/e7/b0/50e7b099c18f84a5e505e872f22e02ac.jpg",
  },
  {
    name: "Klesa Kadhala - Dada",
    src: song9,
    image: "https://static.toiimg.com/photo/98079942.cms",
  },
  {
    name: "Ennai Vittu  - Love Today",
    src: song10,
    image: "https://tse3.mm.bing.net/th?id=OIP.VFxWA98wgrfzNMpS7l8qWwHaEK&pid=Api&P=0&h=180",
  },
  {
    name: "Anbae peranbae - NGK",
    src: song11,
    image: "https://tse4.mm.bing.net/th?id=OIP.cnoJoPKiRLh__ircqBVXWgHaEK&pid=Api&P=0&h=180",
  },
  {
    name: "Oru Kal Oru Kannadi - Siva Manasula Sakthi",
    src: song12,
    image: "https://i.ytimg.com/vi/oPyi9Ci78tQ/maxresdefault.jpg",
  },
  {
    name: "Pogathey - Dada",
    src: song13,
    image: "https://tse3.mm.bing.net/th?id=OIP.-LxWEuoALswDi3eRkrywjwHaEK&pid=Api&P=0&h=180",
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
