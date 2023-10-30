import { Button } from '@/components/button';
import { ROUTES } from '@/utils/constants';
import { useRouter } from 'next/router';
import React from 'react';

const ProductDetailsBackBtn = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      {/* BACK BUTTON */}
      <div className="absolute top-3 left-0 laptop:top-[-50px] xl:left-20">
        <Button text="Back to Products" onClick={() => router.push(ROUTES.PRODUCTS)} />
      </div>
    </React.Fragment>
  );
};

export default ProductDetailsBackBtn;
