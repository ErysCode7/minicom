import { useHennesProducts } from '@/services/products/hennes-mauritz';
import HeroSection from './hero';

type Props = {};

const Home = (props: Props) => {
  const { useGetHennesProducts } = useHennesProducts();
  const { data: hennesProducts } = useGetHennesProducts();

  return (
    <div className="pb-20">
      <HeroSection />
      <section className="mt-10 md:mt-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between w-[90%] lg:w-[85%] m-auto">
          <div className="flex-1">
            <p className="text-2xl tracking-widest uppercase">JUST LANDED</p>
            <h2 className="text-2xl font-bold">New Arrivals</h2>
          </div>
          <div className="flex-[1.5] mt-3 md:mt-0">
            <p className="text-sm mobile:text-base">
              Introducing out latest fashion collection, featuring on-trend styles and must-have
              pieces for the season. Don't miss out on the hottest fashion of the season, shop our
              new arrivals now!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
