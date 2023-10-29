import { useState } from 'react';

export const useCartHooks = () => {
  const [cartStateQuantity, setCartStateQuantity] = useState(1);

  return {
    //state
    cartStateQuantity,
    //state func
    setCartStateQuantity,
  };
};
