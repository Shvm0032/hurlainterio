'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Award, Users, Clock, Heart } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Clock, value: '1000+', label: 'Projects Completed' },
    { icon: Heart, value: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Crafting Luxury Since 2008
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              At Hurla Interio, we believe that exceptional furniture is more than just 
              functional pieces – an expression of artistry, craftsmanship, and 
              personal style.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of master craftsmen and designers work tirelessly to create 
              bespoke pieces that reflect your unique vision while maintaining the 
              highest standards of quality and elegance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-3">
                    <stat.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-amber-700 transition-colors duration-300"
              >
                Learn More About Us
              </motion.button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Luxury furniture craftsmanship"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl glass-effect"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">Premium Quality</div>
                <div className="text-amber-600 font-medium">Guaranteed</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
