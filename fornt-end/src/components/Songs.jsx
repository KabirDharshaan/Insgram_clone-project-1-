import React, { useState } from 'react';

const Songs = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null); // Track current song
  const [currentImage, setCurrentImage] = useState(''); // Track current image
  const audioRef = React.createRef();

  // Define songs with their name, file, and image
  const songs = [
    {
      title: 'Yuvan Hits',
      file: 'path-to-yuvan-hits.mp3',
      image: 'path-to-yuvan-image.jpg'
    },
    {
      title: 'Harris Hits',
      file: 'path-to-harris-hits.mp3',
      image: 'path-to-harris-image.jpg'
    },
    {
      title: 'Ilayaraja Classics',
      file: 'path-to-ilayaraja-classics.mp3',
      image: 'path-to-ilayaraja-image.jpg'
    },
    {
      title: 'AR Rahman Tunes',
      file: 'path-to-ar-rahman-tunes.mp3',
      image: 'path-to-ar-rahman-image.jpg'
    },
  ];

  // Handle song selection
  const handleSongSelect = (song) => {
    setCurrentSong(song.title);
    setCurrentImage(song.image);
    audioRef.current.src = song.file;
    audioRef.current.play();
    setIsPlaying(true);
  };

  // Handle play/pause toggle
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-400 to-green-400 text-white">
      {/* Left Section: Song List */}
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

      {/* Right Section: Audio Player */}
      <div className="flex-1 p-8 bg-white rounded-lg shadow-lg m-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Now Playing: {currentSong || 'Select a Song'}</h2>

        {/* Display the album image */}
        <div className="mb-6">
          {currentImage && (
            <img src={currentImage} alt="Album Art" className="w-48 h-48 object-cover rounded-full mx-auto" />
          )}
        </div>

        <audio ref={audioRef} className="w-full mb-4" controls>
          <source src="" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        <div className="flex justify-center space-x-6">
          <button
            onClick={togglePlayPause}
            className={`px-8 py-3 rounded-full text-white ${
              isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
            } transition-colors duration-200`}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Songs;
