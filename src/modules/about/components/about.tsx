import Image from 'next/image';
import { ABOUT_LIST } from '../constants';
import AboutColumns from './about-columns';
import AboutColumnsContainer from './about-columns-container';

type Props = {};

const About = (props: Props) => {
  return (
    <div className="w-[90%] lg:w-[85%] m-auto mt-10 laptop:mt-20 pb-20">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">About us</h1>
        <p className="mt-5 w-full laptop:w-[60%] m-auto text-sm laptop:text-base">
          Build a versatile wardrobe with our must-have essentials. Our wardrobe guides help you
          invest in timeless pieces that can be mixed and matched for endless outfit possibilities.
        </p>
      </div>

      <div className="mt-10 flex-shrink-0 relative w-full h-[500px] sm:h-[700px] laptop:h-[850px]">
        <Image
          src={'/images/about/pexels-fauxels.jpg'}
          alt={'company'}
          fill
          className="object-cover rounded-xl"
          priority
        />
      </div>

      {/* ABOUT COLUMNS */}

      <AboutColumnsContainer>
        <div className="flex flex-col gap-5 laptop:gap-10">
          {ABOUT_LIST.list.slice(0, 2).map(list => (
            <AboutColumns key={list.id} order={2} list={list} />
          ))}
        </div>
        <div className="order-2 mt-10 flex-shrink-0 relative w-full laptop:w-[600px] h-[300px] sm:h-[700px] laptop:h-[400px]">
          <Image
            src={'/images/about/pexels-couple-2.jpg'}
            alt={'company'}
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
      </AboutColumnsContainer>

      <AboutColumnsContainer>
        <div className="laptop:order-2 flex flex-col gap-5 laptop:gap-10">
          {ABOUT_LIST.list.slice(2, 4).map(list => (
            <AboutColumns key={list.id} order={2} list={list} />
          ))}
        </div>
        <div className="laptop:order-1 mt-10 flex-shrink-0 relative w-full laptop:w-[600px] h-[300px] sm:h-[700px] laptop:h-[400px]">
          <Image
            src={'/images/about/pexels-couple.jpg'}
            alt={'company'}
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
      </AboutColumnsContainer>

      <AboutColumnsContainer>
        <div className="flex flex-col gap-5 laptop:gap-10">
          {ABOUT_LIST.list.slice(4, 6).map(list => (
            <AboutColumns key={list.id} order={2} list={list} />
          ))}
        </div>
        <div className="order-2 mt-10 flex-shrink-0 relative w-full laptop:w-[600px] h-[300px] sm:h-[700px] laptop:h-[400px]">
          <Image
            src={'/images/about/pexels-company.jpg'}
            alt={'company'}
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
      </AboutColumnsContainer>

      <AboutColumnsContainer>
        <div className="laptop:order-2 flex flex-col gap-5 laptop:gap-10">
          {ABOUT_LIST.list.slice(6, 8).map(list => (
            <AboutColumns key={list.id} order={2} list={list} />
          ))}
        </div>
        <div className="laptop:order-1 mt-10 flex-shrink-0 relative w-full laptop:w-[600px] h-[300px] sm:h-[700px] laptop:h-[400px]">
          <Image
            src={'/images/about/pexels-pixabay.jpg'}
            alt={'company'}
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
      </AboutColumnsContainer>

      <AboutColumnsContainer>
        <div className="flex flex-col gap-5 laptop:gap-10">
          {ABOUT_LIST.list.slice(8, 10).map(list => (
            <AboutColumns key={list.id} order={2} list={list} />
          ))}
        </div>
        <div className="order-2 mt-10 flex-shrink-0 relative w-full laptop:w-[600px] h-[300px] sm:h-[700px] laptop:h-[400px]">
          <Image
            src={'/images/about/pexels-studio.jpg'}
            alt={'company'}
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
      </AboutColumnsContainer>
    </div>
  );
};

export default About;
