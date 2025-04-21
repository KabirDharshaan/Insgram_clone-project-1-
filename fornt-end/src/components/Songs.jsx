

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Songs = () => {
  const navigate = useNavigate();

  const songs = [
    { title: 'Yuvan Hits', path: '/songs/yuvan' },
    { title: 'Harris Hits', path: '/songs/Harris' },
    { title: 'Ilayaraja Classics' },
    { title: 'AR Rahman Tunes' },
  ];

  const handleSongSelect = (song) => {
    if (song.path) {
      navigate(song.path); // Navigate to the specific song page (e.g., Yuvan.jsx)
    } else {
      alert(`${song.title} page not available yet.`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-green-400 text-white">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-white">🎶 Welcome to the Music Hub 🎶</h1>
        <p className="text-lg mt-2 text-white/80">Explore your favorite music categories below</p>
      </div>

      {/* Songs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 py-8">
        {songs.map((song, index) => (
          <div
            key={index}
            onClick={() => handleSongSelect(song)}
            className="cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform duration-300 p-6 rounded-xl shadow-lg text-center text-white"
          >
            <h2 className="text-2xl font-semibold">{song.title}</h2>
            <p className="mt-4">Click to explore tracks in this category</p>
          </div>
        ))}
      </div>

      {/* Main Content Section */}
      <div className="text-center py-8 bg-white text-gray-800 rounded-lg shadow-lg m-4">
        <h2 className="text-xl font-semibold mb-4">Now Playing</h2>
        <p>Select a song category above to view and play tracks. Start exploring your favorite music now!</p>
      </div>
    </div>
  );
};

export default Songs;
