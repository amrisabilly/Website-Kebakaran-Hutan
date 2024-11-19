import React, { useState } from 'react';
import Navbar from "../Components/Navbar";
import Background from "../../../public/assets/Background.svg";
import Footer from "@/Components/Footer";
import ReactPlayer from 'react-player/youtube';

const Gallery = () => {
  // Array video YouTube yang berhubungan dengan kebakaran hutan
  const videoIds = [
    "czWEIhj9p28", // Video 1 tentang kebakaran hutan
    "AG_4PJj14h0", // Video 2 tentang kebakaran hutan
    "5C0M_GMlP5g", // Video 3 tentang kebakaran hutan
    "JIZx0th246w", // Video 4 tentang kebakaran hutan
  ];

  // State untuk play/pause masing-masing video
  const [playing, setPlaying] = useState(new Array(videoIds.length).fill(false));

  const togglePlayPause = (index) => {
    const newPlayingState = [...playing];
    newPlayingState[index] = !newPlayingState[index]; // Toggle play/pause untuk video tertentu
    setPlaying(newPlayingState); // Update state
  };

  return (
    <>
      <div
        className="bg-slate-400 min-h-screen bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background})`,
        }}
      >
        <Navbar />
        <div className="w-full min-h-screen pt-24 mb-24 flex flex-col items-center gap-6 z-20">
          {/* Menampilkan video YouTube */}
          <div className="flex gap-6 flex-wrap justify-center">
            {videoIds.map((videoId, index) => (
              <div key={index} className="relative hover:scale-95 transform transition duration-500 ease-out">
                <div className="relative rounded-3xl overflow-hidden h-[20em] w-[40em]">
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    playing={playing[index]} // Set play state untuk video tertentu
                    controls={true} // Tampilkan kontrol play/pause default
                    width="100%"
                    height="100%"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                </div>
                <h1 className="absolute top-4 left-4 text-lg font-semibold text-white">Video {index + 1}</h1>
                {/* Tombol untuk Play/Pause */}
                <div className="absolute bottom-4 left-4">
                  <button
                    onClick={() => togglePlayPause(index)} // Toggle play/pause
                    className="bg-red-600 text-white py-2 px-4 rounded-lg"
                  >
                    {playing[index] ? "Pause" : "Play"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
