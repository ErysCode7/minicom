import Image from 'next/image';
import { MODEL_IMAGES } from '../contants';

type Props = {};

const FeaturedSection = (props: Props) => {
  return (
    <section className="mt-10 md:mt-20">
      <div className="w-[90%] lg:w-[85%] m-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
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
      </div>

      <div className="flex flex-wrap justify-center gap-5 mt-10">
        {MODEL_IMAGES.map(model => (
          <div
            key={model.id}
            className="relative h-[250px] w-[250px] sm:w-[300px] sm:h-[300px] transition duration-500 hover:scale-[103%]"
          >
            <Image
              src={model.image}
              alt={model.image}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
