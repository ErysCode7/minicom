import { Products } from '@/services/products/types';
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

type CartContextProps = {
  children: ReactNode;
};

type CartContextType = {
  // Define the properties and methods you want to provide in the context
  cart: Products[];
  setCart: Dispatch<SetStateAction<Products[]>>;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
});

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [cart, setCart] = useState<Products[]>([]);

  const value = {
    //state
    cart,
    //func
    setCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
