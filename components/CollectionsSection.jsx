'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import CollectionCard from './CollectionCard';
import CollectionImage1 from '../Public/Assets/Kitchen/collection-img-1.png'
import CollectionImage2 from '../Public/Assets/Kitchen/collection-img-2.jpg'
import CollectionImage3 from '../Public/Assets/Wardrobe/collection-img-3.png'
import CollectionImage4 from '../Public/Assets/Wardrobe/collection-img-4.png'


const CollectionsSection = () => {
  const collections = [
    {
      id: 'modular-kitchen',
      name: 'Elegante Modular Kitchen',
      description: 'A perfect blend of modern aesthetics and smart storage, the Elegante Modular Kitchen features sleek cabinets, hidden appliances, and a clutter-free layout for effortless cooking.',
      image: CollectionImage1.src,
      features: ['Premium Materials', 'Handcrafted Details', 'Custom Finishes'],
    },
    {
      id: 'rustica-luxe',
      name: 'Rustica Luxe Kitchen',
      description: 'Inspired by warm tones and natural finishes, Rustica Luxe combines wooden textures with high-end appliances, creating a cozy yet sophisticated culinary space.',
      image: CollectionImage2.src,
      features: ['Rich Textures', 'Bold Designs', 'Statement Pieces'],
    },
    {
      id: 'slide-wardrobe',
      name: 'Urban Slide Wardrobe',
      description: 'Designed for compact city living, this sliding-door wardrobe offers maximum storage with a sleek, contemporary design — perfect for bedrooms where space is a luxury.',
      image: CollectionImage3.src,
      features: ['Eco-Friendly', 'Modern Aesthetics', 'Natural Elements'],
    },
    {
      id: 'closet',
      name: 'Classique Walk-In Closet',
      description: 'Experience the ultimate in wardrobe luxury with Classique — a walk-in wardrobe concept offering open shelves, drawer organizers, and ambient lighting for a premium dressing experience.',
      image: CollectionImage4.src,
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
              className="bg-amber-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-amber-700 transition-colors duration-300"
            >
              DOWNLOAD THE CATALOGUE
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionsSection;