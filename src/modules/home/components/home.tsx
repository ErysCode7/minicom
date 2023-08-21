import dynamic from 'next/dynamic';
import HeroSection from './hero-section';

const FeaturedSection = dynamic(() => import('./featured-section'));
const InfoSection = dynamic(() => import('./info-section'));

const Home = () => {
  return (
    <div className="pb-20">
      <HeroSection />
      <FeaturedSection />
      <InfoSection />
    </div>
  );
};

export default Home;
