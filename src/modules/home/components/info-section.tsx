import { INFO_LIST } from '../contants';

const InfoSection = () => {
  return (
    <section>
      <div className="w-[90%] lg:w-[88%] m-auto mt-20 flex flex-col xl:flex-row gap-5">
        <video
          autoPlay
          loop
          controls
          muted
          width={700}
          height={750}
          className="rounded-lg object-fill md:object-contain max-h-fit md:h-full"
        >
          <source src="/videos/video-model.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl laptop:text-4xl font-bold !leading-[1.125]">
            Design Your Comfort Zone
          </h2>
          <p className="mt-2 text-sm sm:text-base">
            We believe that creating a space that brings you joy and tranquility is essential for
            your well-being. Our website is here to provide you with inspiration, tips, and products
            to help you design a comforting environment that reflects your unique style and
            personality.
          </p>
          <ul className="mt-5 flex flex-col gap-3 list-disc px-5">
            {INFO_LIST.map(list => (
              <li key={list.id} className="text-sm text-[#333]">
                {list.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
