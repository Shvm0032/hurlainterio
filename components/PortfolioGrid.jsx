'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Eye } from 'lucide-react';

const PortfolioGrid = () => {
  const projects = [
    {
      id: 1,
      title: 'Luxury Penthouse',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: 'Modern luxury penthouse with panoramic city views',
    },
    {
      id: 2,
      title: 'Executive Office',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: 'Sophisticated executive office design',
    },
    {
      id: 3,
      title: 'Contemporary Villa',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: 'Minimalist villa with natural elements',
    },
    {
      id: 4,
      title: 'Boutique Hotel',
      category: 'Hospitality',
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: 'Elegant boutique hotel lobby design',
    },
    {
      id: 5,
      title: 'Urban Loft',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: 'Industrial chic loft conversion',
    },
    {
      id: 6,
      title: 'Fine Dining',
      category: 'Restaurant',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: 'Upscale restaurant interior design',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our exceptional projects that showcase our commitment to luxury, 
            innovation, and impeccable craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="portfolio-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="portfolio-overlay absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-lg mb-4 opacity-90">{project.description}</p>
                    <div className="flex items-center justify-center space-x-4">
                      <Link href={`/portfolio/${project.id}`}>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
                        >
                          <Eye className="w-5 h-5" />
                        </motion.button>
                      </Link>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              View Full Portfolio
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGrid;