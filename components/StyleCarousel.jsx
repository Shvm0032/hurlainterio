'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const StyleCarousel = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const styles = [
    {
      id: 'modern-contemporary',
      name: 'Modern Contemporary',
      description: 'Clean lines, minimalist aesthetics, and functional beauty.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      features: ['Clean Lines', 'Neutral Colors', 'Functional Design'],
    },
    {
      id: 'classic-elegance',
      name: 'Classic Elegance',
      description: 'Timeless sophistication with traditional craftsmanship.',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
      features: ['Traditional Craft', 'Rich Materials', 'Timeless Appeal'],
    },
    {
      id: 'minimalist-design',
      name: 'Minimalist Design',
      description: 'Less is more - pure forms and essential functionality.',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      features: ['Simple Forms', 'Open Spaces', 'Essential Elements'],
    },
    {
      id: 'luxury-traditional',
      name: 'Luxury Traditional',
      description: 'Opulent designs with heritage-inspired craftsmanship.',
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg',
      features: ['Heritage Inspired', 'Opulent Details', 'Premium Materials'],
    },
    {
      id: 'industrial-chic',
      name: 'Industrial Chic',
      description: 'Raw materials meet refined design in urban sophistication.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      features: ['Raw Materials', 'Urban Style', 'Industrial Elements'],
    },
  ];

  if (!mounted) return <div className="h-96 bg-gray-100" />;

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Design Styles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse range of design styles, each carefully crafted to reflect different aesthetics and lifestyles.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.custom-swiper-button-next',
              prevEl: '.custom-swiper-button-prev',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3.5 },
            }}
            className="pb-8"
          >
            {styles.map((style) => (
              <SwiperSlide key={style.id}>
                <div className="group">
                  <Link href={`/styles/${style.id}`}>
                    <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={style.image}
                          alt={style.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-xl font-bold mb-1">{style.name}</h3>
                          <div className="flex flex-wrap gap-1">
                            {style.features.map((feature, idx) => (
                              <span key={idx} className="px-2 py-1 bg-white/20 backdrop-blur-sm text-xs rounded-full">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 leading-relaxed">{style.description}</p>
                        <div className="mt-4 text-amber-600 font-medium group-hover:text-amber-700 transition-colors duration-300">
                          Explore Style →
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom arrows */}
          <div className="custom-swiper-button-prev absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-700 transition duration-300 shadow-lg cursor-pointer">
            <span className="text-lg font-bold">&larr;</span>
          </div>
          <div className="custom-swiper-button-next absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-700 transition duration-300 shadow-lg cursor-pointer">
            <span className="text-lg font-bold">&rarr;</span>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/styles">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-amber-700 transition-colors duration-300">
              View All Styles
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StyleCarousel;
