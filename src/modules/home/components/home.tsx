import FeaturedSection from './featured-section';
import HeroSection from './hero-section';

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="pb-20">
      <HeroSection />
      <FeaturedSection />
    </div>
  );
};

export default Home;
