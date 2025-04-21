




import React, { useEffect, useRef, useState } from "react";

// Import songs directly since they're inside src folder
import song1 from "../songslist/harrishits/Irandaam Ulagam - Kani Mozhiyae Video _ Arya, Anushka.mp3";
import song2 from "../songslist/harrishits/Karu Karu Vizhigalal - 4K Video _ கரு கரு _ Pachaikili Muthucharam _ Sarath Kumar _ Harris Jayaraj.mp3";
import song3 from "../songslist/harrishits/Ko - Amali Thumali Video _ Jiiva, Karthika _ Harris.mp3";
import song4 from "../songslist/harrishits/Maattrraan - Naani Koni Video _ Suriya, Kajal Agarwal.mp3";
import song5 from "../songslist/harrishits/Manjal Veyil - மஞ்சள் வெயில் - 4K Video Song _ Vettaiyaadu Vilaiyaadu _ Kamal _ GVM _Harris Jayaraj.mp3";
import song6 from "../songslist/harrishits/Vaaranam Aayiram - Nenjukkul Peidhidum Video _ Harris Jayaraj _ Suriya.mp3";
import song7 from "../songslist/harrishits/yt1z.net - Anegan - Roja Kadale Video Dhanush Harris Jayaraj (128 KBps).mp3";
import song8 from "../songslist/harrishits/yt1z.net - Endrendrum Punnagai - Ennai Saaithaalae Video Harris Jayaraj (128 KBps).mp3";
import song9 from "../songslist/harrishits/yt1z.net - Engeyum Kaadhal - Dhimu Dhimu Video Jayam Ravi, Hansika Harris (128 KBps).mp3";
import song10 from "../songslist/harrishits/yt1z.net - Engeyum Kaadhal - Lolita Video Jayam Ravi, Hansika Harris (192 KBps).mp3";
import song11 from "../songslist/harrishits/yt1z.net - Engeyum Kaadhal - Thee Illai Video Jayam Ravi, Hansika Harris Jayaraj (128 KBps).mp3";
import song12 from "../songslist/harrishits/yt1z.net - Minnale Vaseegara song Bombay Jayashri Harris Jayaraj Gautham Vasudev Menon (128 KBps).mp3";
import song13 from "../songslist/harrishits/yt1z.net - Oru Malai Video Song - Ghajini Suriya Asin Nayanthara Harris Jayaraj A.R. Murugadoss (128 KBps).mp3";
import song14 from "../songslist/harrishits/yt1z.net - Vaaranam Aayiram - Annul Maelae Video Harris Jayaraj Suriya (128 KBps).mp3";
import song15 from "../songslist/harrishits/yt1z.net - Vaaranam Aayiram - Mundhinam Video Harris Jayaraj Suriya (192 KBps).mp3";
import song16 from "../songslist/harrishits/yt1z.net - Yennai Arindhaal - Mazhai Vara Pogudhae Video Ajith Harris Jayaraj (128 KBps).mp3";
// Add more songs as needed
// const songList = [
//   {
//     name: "Kani Mozhiyae - Irandaam Ulagam",
//     src: song1,
//     image: "https://tse4.mm.bing.net/th?id=OIP.Y2bDxzDWQxYyo814IKn6wwHaDW&pid=Api&P=0&h=180",
//   },
//   {
//     name: "Karu Karu Vizhigalal - Pachaikili Muthucharam",
//     src: song2,
//     image: "https://i.ytimg.com/vi/H7ZwIPCfWBw/maxresdefault.jpg",
//   },
//   {
//     name: "Amali Thumali - Ko ",
//     src: song3,
//     image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/59fbbcce653af852db5b54e711f428e2dfccf42695a73c2a5ed26cded231c828._RI_V_TTW_.jpg",
//   },
//   {
//     name: "Naani Koni - Maattrraan  ",
//     src: song4,
//     image: "https://i.pinimg.com/originals/81/98/03/819803e16c21ca4ad42a5ea0f67f73d3.jpg",
//   },
//   {
//     name: "Manjal Veyil - Vettaiyaadu Vilaiyaadu ",
//     src: song5,
//     image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vettaiyadu-villaiyadu-et00000194-1687413956.jpg",
//   },
//   {
//     name: "Nenjukkul Peidhidum - Vaaranam Aayiram",
//     src: song6,
//     image: "https://wallpapers.com/images/hd/two-couples-vaaranam-aayiram-poster-5sws1xemnixvbbzg.jpg",
//   },

//   // Add more songs as needed
// ];


const songList = [
  {
    name: "Kani Mozhiyae - Irandaam Ulagam",
    src: song1,
    image: "https://tse4.mm.bing.net/th?id=OIP.Y2bDxzDWQxYyo814IKn6wwHaDW&pid=Api&P=0&h=180",
  },
  {
    name: "Karu Karu Vizhigalal - Pachaikili Muthucharam",
    src: song2,
    image: "https://i.ytimg.com/vi/H7ZwIPCfWBw/maxresdefault.jpg",
  },
  {
    name: "Amali Thumali - Ko",
    src: song3,
    image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/59fbbcce653af852db5b54e711f428e2dfccf42695a73c2a5ed26cded231c828._RI_V_TTW_.jpg",
  },
  {
    name: "Naani Koni - Maattrraan",
    src: song4,
    image: "https://i.pinimg.com/originals/81/98/03/819803e16c21ca4ad42a5ea0f67f73d3.jpg",
  },
  {
    name: "Manjal Veyil - Vettaiyaadu Vilaiyaadu",
    src: song5,
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vettaiyadu-villaiyadu-et00000194-1687413956.jpg",
  },
  {
    name: "Nenjukkul Peidhidum - Vaaranam Aayiram",
    src: song6,
    image: "https://wallpapers.com/images/hd/two-couples-vaaranam-aayiram-poster-5sws1xemnixvbbzg.jpg",
  },
  {
    name: "Roja Kadale - Anegan",
    src: song7,
    image: "https://tse4.mm.bing.net/th?id=OIP.LlA2Du-oo-o6K9HeJ-VX0wHaE7&pid=Api&P=0&h=180",
  },
  {
    name: "Ennai Saaithaalae - Endrendrum Punnagai",
    src: song8,
    image: "https://tse2.mm.bing.net/th?id=OIP.LUz63ZsKYeJccXmE8dA8VwHaJ4&pid=Api&P=0&h=180",
  },
  {
    name: "Dhimu Dhimu - Engeyum Kaadhal",
    src: song9,
    image: "https://images-na.ssl-images-amazon.com/images/I/818UA6Pgq1L._RI_.jpg",
  },
  {
    name: "Lolita - Engeyum Kaadhal",
    src: song10,
    image: "https://wallpapercave.com/wp/wp7628274.jpg",
  },
  {
    name: "Thee Illai - Engeyum Kaadhal",
    src: song11,
    image: "https://i.scdn.co/image/ab67616d0000b2733400267d036e5577446bdaf6",
  },
  {
    name: "Vaseegara - Minnale",
    src: song12,
    image: "https://image.airtel.tv/RAJTV/RAJTV_MOVIE_619dc3b9bf4a06250cbdfbf6/LANDSCAPE_169/LANDSCAPE_169_Minnale-1920x1080.jpg",
  },
  {
    name: "Oru Malai - Ghajini",
    src: song13,
    image: "http://4.bp.blogspot.com/-jqv1emJVPP8/U0WJf1EiwJI/AAAAAAAAF2I/Ons-Ugsz-rU/s1600/Surya+Asin+Ghajini+Movie+HD+Images+Posters+Wallpapers+Pics+Photos+Firstlook+Stilla+(42).jpg",
  },
  {
    name: "Annul Maelae - Vaaranam Aayiram",
    src: song14,
    image: "https://tse3.mm.bing.net/th?id=OIP.DtIf0I11u5oii1yz8R62UQHaFj&pid=Api&P=0&h=180",
  },
  {
    name: "Mundhinam - Vaaranam Aayiram",
    src: song15,
    image: "https://wallpapers.com/images/file/surya-and-meghna-with-a-guitar-vaaranam-aayiram-poster-1vpon8fhd6i73bwp.jpg",
  },
  {
    name: "Mazhai Vara Pogudhae - Yennai Arindhaal",
    src: song16,
    image: "https://3.bp.blogspot.com/-I1Sf9owm05w/VMdL9XV33PI/AAAAAAAADTg/o172sDSZ4ys/s1600/ya7.jpg",
  },
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
