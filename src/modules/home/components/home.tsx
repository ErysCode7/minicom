import FeaturedSection from './featured-section';
import HeroSection from './hero-section';
import InfoSection from './info-section';

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="pb-20">
      <HeroSection />
      <FeaturedSection />
      <InfoSection />
    </div>
  );
};

export default Home;
