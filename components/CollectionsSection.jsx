'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import CollectionCard from './CollectionCard';

const CollectionsSection = () => {
  const collections = [
    {
      id: 'diamante',
      name: 'Diamante Collection',
      description: 'Luxurious furniture pieces that sparkle with sophistication and timeless elegance.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      features: ['Premium Materials', 'Handcrafted Details', 'Custom Finishes'],
    },
    {
      id: 'rubino',
      name: 'Rubino Collection',
      description: 'Rich, warm tones and opulent designs that create spaces of unparalleled luxury.',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      features: ['Rich Textures', 'Bold Designs', 'Statement Pieces'],
    },
    {
      id: 'smeraldo',
      name: 'Smeraldo Collection',
      description: 'Fresh, contemporary designs with natural elements and sustainable materials.',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      features: ['Eco-Friendly', 'Modern Aesthetics', 'Natural Elements'],
    },
    {
      id: 'topazio',
      name: 'Topazio Collection',
      description: 'Golden accents and refined details for the most discerning taste.',
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      features: ['Gold Accents', 'Refined Details', 'Exclusive Designs'],
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
            Our Premium Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated collections, each designed to bring luxury 
            and sophistication to your living spaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <CollectionCard collection={collection} />
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
          <Link href="/collections">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              View All Collections
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionsSection;