import React from 'react';
import Navbar from "../Components/Navbar";
import Background from "../../../public/assets/Background.svg";
import Footer from "@/Components/Footer";
import Berita from "../../../public/assets/Berita.svg";

const Gallery = () => {
  const images = [Berita, Berita, Berita, Berita];

  return (
    <>
      <div
        className="bg-slate-400 h-full bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background})`,
        }}
      >
        <Navbar />
        <div className="w-full min-h-screen pt-24 mb-24 flex gap-6 justify-center z-20">
          {images.map((image, index) => (
            <div key={index} className="relative hover:scale-95 transform transition duration-500 ease-out">
              <div className="relative rounded-3xl overflow-hidden">
                <img src={image} alt={`Gallery item ${index + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </div>
              <h1 className="absolute top-4 left-4 text-lg font-semibold text-white">Picture {index + 1}</h1>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
