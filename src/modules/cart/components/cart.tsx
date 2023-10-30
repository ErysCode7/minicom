import dynamic from 'next/dynamic';

// Lazy load the component that depends on client-side data
const CartContents = dynamic(() => import('./cart-contents'), { ssr: false });

const Cart = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-5 items-center justify-center pb-10">
      <CartContents />
    </div>
  );
};

export default Cart;
