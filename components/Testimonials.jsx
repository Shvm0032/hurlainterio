'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Interior Designer',
      company: 'Elite Homes',
      content: 'Working with Luxury Studio has been an absolute pleasure. Their attention to detail and commitment to quality is unmatched in the industry.',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO',
      company: 'Chen Enterprises',
      content: 'The bespoke furniture pieces transformed our office space completely. The craftsmanship is exceptional and the design perfectly captures our brand essence.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Homeowner',
      company: 'Private Client',
      content: 'From concept to completion, the team exceeded our expectations. Our home now feels like a luxury resort. Every piece tells a story of elegance and sophistication.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Architect',
      company: 'Thompson Associates',
      content: 'Their ability to bring our architectural vision to life through custom furniture is remarkable. Professional, reliable, and incredibly talented team.',
      rating: 5,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
    },
  ];

  if (!mounted) {
    return <div className="h-96 bg-gray-900" />;
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover why discerning clients choose us for their luxury furniture and interior design needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/20">
                  <div className="flex items-center mb-6">
                    <Quote className="w-8 h-8 text-amber-400 mr-3" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-200 mb-6 leading-relaxed text-lg">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-amber-400 text-sm">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;