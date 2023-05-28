import { NotFound } from '@/modules/not-found';
import type { NextPage } from 'next';

type Props = {};

const NotFoundPage: NextPage = (props: Props) => {
  return (
    <>
      <NotFound />
    </>
  );
};

export default NotFoundPage;
