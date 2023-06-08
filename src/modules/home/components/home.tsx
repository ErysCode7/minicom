type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-5 items-center justify-center h-[calc(100vh_-_160px)]">
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold">Home</h1>
    </div>
  );
};

export default Home;
