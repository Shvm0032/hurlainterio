"use client";
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Image from "next/image";
import image1 from "../Public/Assets/popup/hafele-design-studio-1.jpg";
import image2 from "../Public/Assets/popup/hafele-design-studio-2.jpg";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Step 1: Preload images when component mounts
  useEffect(() => {
    const preloadImages = [image1.src, image2.src];
    preloadImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // Step 2: Delay popup show
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // 3 sec delay

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      image: image1.src,
      title: "Welcome to Our Interior Design",
      buttonText: "Explore More",
      link: "/services",
    },
    {
      image: image2.src,
      title: "Modern Living Spaces",
      buttonText: "View Projects",
      link: "/projects",
    },
  ];

  if (!showPopup) return null;

  return (
    <>
      {/* Hidden preload img tags (for safety) */}
      <div className="hidden">
        <img src={image1.src} alt="preload1" />
        <img src={image2.src} alt="preload2" />
      </div>

      <div className="fixed z-[1000] flex items-center justify-center top-0 left-0 h-[100vh] w-full bg-[#00000075] animate-fade-in">
        <div className="md:w-[70%] h-[62vh] sm:w-[90%] relative rounded-md overflow-hidden transition-opacity duration-500 ease-in-out">

          {/* ❌ Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold z-50 hover:bg-opacity-80"
          >
            ✕
          </button>

          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="relative h-[400px] md:h-[500px]">
                <Image
                  src={slide.image}
                  alt={`Slide ${index}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  priority={true}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
                  <h2 className="text-2xl md:text-5xl  font-bold mb-4">{slide.title}</h2>
                  <a
                    href={slide.link}
                    className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-300 transition"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Tailwind Animation (add in globals.css if not in config) */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out forwards;
        }
      `}</style>
    </>
  );
};

export default Popup;
