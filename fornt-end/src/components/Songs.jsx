// Songs.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Songs = () => {
  const navigate = useNavigate();

  const songs = [
    { title: 'Yuvan Hits', path: '/songs/yuvan' },
    { title: 'Harris Hits' },
    { title: 'Ilayaraja Classics' },
    { title: 'AR Rahman Tunes' },
  ];

  const handleSongSelect = (song) => {
    if (song.path) {
      navigate(song.path); // Navigate to Yuvan.jsx
    } else {
      alert(`${song.title} page not available yet.`);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-400 to-green-400 text-white">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 p-6 rounded-lg shadow-lg m-4">
        <h2 className="text-2xl font-bold mb-6">Select a Song</h2>
        <ul className="space-y-4">
          {songs.map((song, index) => (
            <li
              key={index}
              onClick={() => handleSongSelect(song)}
              className="cursor-pointer hover:bg-gray-700 p-3 rounded-lg transition-colors"
            >
              {song.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Panel */}
      <div className="flex-1 p-8 bg-white rounded-lg shadow-lg m-4 text-gray-800 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Now Playing</h2>
        <p>Select a song category from the left panel to view and play tracks.</p>
      </div>
    </div>
  );
};

export default Songs;
