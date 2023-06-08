import { Button } from '@/components/button';
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
      <div className="flex flex-col gap-3">
        <p>Navigate back to</p>
        <Button text="Home" onClick={() => router.push(ROUTES.HOME)} />
      </div>
    </div>
  );
};

export default NotFound;
