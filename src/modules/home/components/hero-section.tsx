import { Button } from '@/components/button';
import { ROUTES } from '@/utils/constant';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Props = {};

const HeroSection = (props: Props) => {
  const router = useRouter();

  return (
    <section className="laptop:mt-20 w-full">
      <div className="w-full lg:w-[85%] m-auto flex items-center justify-between gap-5 flex-col laptop:flex-row">
        <div className="absolute laptop:static z-50 top-[35%] md:top-2/4 text-white laptop:text-black px-5 sm:px-10 laptop:px-0 flex flex-col gap-4 md:gap-8 order-2 laptop:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl laptop:text-6xl font-bold !leading-[1.125]">
            Luxury Brands at Affordable Prices
          </h1>
          <p className="w-[80%] text-sm md:text-base laptop:text-lg">
            Upgrade your wardrobe with high-end fashion from top luxury brands at prices you can
            afford. Our collection offers a wide range of designer clothing.
          </p>
          <div className="w-[130px]" onClick={() => router.push(ROUTES.PRODUCTS)}>
            <Button text="Shop Now" />
          </div>
        </div>

        <div className="relative w-full laptop:w-[700px] h-[500px] sm:h-[700px] laptop:h-[500px] order-1 laptop:order-2">
          <Image
            src={'/images/home/pexels-ozan-culha-model.jpg'}
            alt={'ozan'}
            fill
            className="object-cover rounded"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
