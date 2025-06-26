import HeroSlider from '../components/HeroSlider';
import CollectionsSection from '../components/CollectionsSection';
import StyleCarousel from '../components/StyleCarousel';
import PortfolioGrid from '../components/PortfolioGrid';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import USPs from '../components/USPs';
import PartnerBanner from '../components/PartnerBanner';

export const metadata = {
  title: 'Luxury Furniture Studio - Premium Custom Interior Design',
  description: 'Discover exquisite luxury furniture and custom interior design solutions. Premium collections, bespoke craftsmanship, and personalized design services.',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <CollectionsSection />
      <StyleCarousel />
      <PortfolioGrid />
      <AboutSection />
      <Testimonials />
      <USPs />
      <PartnerBanner />
    </div>
  );
}