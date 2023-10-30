import { useState } from 'react';

export const useCartHooks = () => {
  const [cartStateQuantity, setCartStateQuantity] = useState(1);

  return {
    // STATE
    cartStateQuantity,
    // STATE FUNCTIONS
    setCartStateQuantity,
  };
};
