import { ROUTES } from '@/utils/constant';
import { useRouter } from 'next/router';

type Props = {};

const NotFound = (props: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2 md:gap-3 lg:gap-5 items-center justify-center h-[calc(100vh_-_80px)]">
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold">
        404 page Not Found!
      </h1>
      <p>We couldn't find the page you're looking for</p>
      <div className="flex items-center gap-1">
        <p>Navigate back to</p>
        <button
          onClick={() => router.push(ROUTES.HOME)}
          className="bg-blue-500 text-white rounded px-3 py-2"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
