'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Luxury Interior Design',
      subtitle: 'Transform Your Space with Premium Furniture',
      description: 'Discover our exclusive collection of handcrafted furniture and bespoke interior design solutions.',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Bespoke Craftsmanship',
      subtitle: 'Every Piece Tells a Story',
      description: 'Experience the finest materials and exceptional attention to detail in every custom creation.',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Premium Collections',
      subtitle: 'Elegance Meets Functionality',
      description: 'Explore our curated collections designed to elevate your living spaces with timeless sophistication.',
    },
  ];

  if (!mounted) {
    return (
      <div className="relative h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Luxury Studio</h1>
          <p className="text-xl md:text-2xl">Premium Interior Design</p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-overlay"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="relative z-10 h-full flex items-center justify-center pt-[200px] md:pt-50">
                <div className="text-center text-white max-w-4xl mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h1 className="text-3xl md:text-7xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h1>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <h2 className="text-2xl md:text-3xl mb-6 text-amber-300 font-light">
                      {slide.subtitle}
                    </h2>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                      {slide.description}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="space-x-4"
                  >
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-amber-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-amber-700 transition-colors duration-300 shadow-lg"
                      >
                        Talk to Us
                      </motion.button>
                    </Link>
                    <Link href="/collections">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                      >
                        View Collections
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
