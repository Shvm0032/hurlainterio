import { motion } from 'framer-motion';
import Image from 'next/image';

export const metadata = {
  title: 'About Us - Luxury Studio | Premium Furniture & Interior Design',
  description: 'Learn about our journey, craftsmanship philosophy, and commitment to creating exceptional luxury furniture and interior design solutions.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Since 2008, we've been crafting exceptional luxury furniture that transforms 
              spaces into works of art, combining traditional craftsmanship with contemporary design.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Craftsmanship Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded by master craftsman Alessandro Rossi, Luxury Studio began as a small 
                workshop with a simple vision: to create furniture that transcends functionality 
                and becomes art.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey started with handcrafting bespoke pieces for discerning clients 
                who valued exceptional quality and unique design. Today, we've grown into a 
                premier luxury furniture studio while maintaining our commitment to artisanal excellence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every piece we create tells a story of passion, precision, and dedication to 
                the finest materials and techniques passed down through generations.
              </p>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Master craftsman at work"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl lg:order-1">
              <Image
                src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Luxury furniture showroom"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Design Philosophy
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our design philosophy centers on the belief that luxury furniture should 
                enhance your lifestyle while reflecting your personal taste and values.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We blend traditional techniques with contemporary aesthetics, using only 
                the finest sustainable materials sourced from around the world. Each piece 
                is meticulously crafted to stand the test of time.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of skilled artisans and designers work closely with clients to 
                bring their vision to life, ensuring every detail exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do and every piece we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality',
                description: 'We never compromise on quality, using only the finest materials and time-tested techniques.',
              },
              {
                title: 'Craftsmanship',
                description: 'Every piece is handcrafted by skilled artisans who take pride in their work.',
              },
              {
                title: 'Innovation',
                description: 'We blend traditional methods with modern technology to create timeless designs.',
              },
              {
                title: 'Sustainability',
                description: 'We are committed to responsible sourcing and environmentally conscious practices.',
              },
              {
                title: 'Service',
                description: 'Our dedicated team provides exceptional service from concept to completion.',
              },
              {
                title: 'Heritage',
                description: 'We honor traditional craftsmanship while embracing contemporary design.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The talented individuals behind every exceptional piece.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Alessandro Rossi',
                role: 'Founder & Master Craftsman',
                image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300',
              },
              {
                name: 'Maria Santos',
                role: 'Head Designer',
                image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300',
              },
              {
                name: 'David Chen',
                role: 'Production Manager',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300',
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-lg text-amber-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}