const ProductErrorScreen = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-3 lg:gap-5 items-center justify-center h-[calc(100vh_-_160px)] text-center">
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold">Oops!</h1>
      <p className="text-xs sm:text-sm md:text-base">
        There was an error connecting to the server. Please comeback later!
      </p>
    </div>
  );
};

export default ProductErrorScreen;
