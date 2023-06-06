import { Products } from '@/services/products/types';
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

type CartContextProps = {
  children: ReactNode;
};

type CartContextType = {
  // Define the properties and methods you want to provide in the context
  cart: Products[];
  productLength: number;
  setCart: Dispatch<SetStateAction<Products[]>>;
  setProductLength: Dispatch<SetStateAction<number>>;
  getItemsQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  productLength: 0,
  setCart: () => {},
  setProductLength: () => {},
  getItemsQuantity: () => {
    return 0;
  },
  increaseCartQuantity: () => {},
  decreaseCartQuantity: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [cart, setCart] = useState<Products[]>([]);
  const [productLength, setProductLength] = useState(0);

  //get the quantity of the product
  const getItemsQuantity = () => {
    return 0;
  };

  //increase product quantity in cart
  const increaseCartQuantity = (id: number) => {};

  //decrease product quantity in cart
  const decreaseCartQuantity = (id: number) => {};

  //remove from cart
  const removeFromCart = (id: number) => {};

  //clear cart
  const clearCart = () => {};

  const value = {
    //state
    cart,
    productLength,
    //state func
    setCart,
    setProductLength,
    //cart functions
    getItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
