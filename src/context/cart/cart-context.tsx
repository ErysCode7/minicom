import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

type CartContextProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type CartContextType = {
  // Define the properties and methods you want to provide in the context
  cart: CartItem[];
  productLength: number;
  setCart: Dispatch<SetStateAction<CartItem[]>>;
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
  const [cart, setCart] = useState<CartItem[]>([]);
  const [productLength, setProductLength] = useState(0);

  // const [cartItems, setCartItems] = useLocalStorage<>(
  //   "shopping-cart",
  //   []
  // )

  //get the quantity of the product
  const getItemsQuantity = (id: number) => {
    const itemQuantity = cart.find(item => item.id === id)?.quantity || 0;

    return itemQuantity;
  };

  //increase product quantity in cart
  const increaseCartQuantity = (id: number) => {
    setCart(prevCart => {
      if (prevCart.find(item => item.id === id) == null) {
        return [...prevCart, { id, quantity: 1 }];
      } else {
        return prevCart.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  //decrease product quantity in cart
  const decreaseCartQuantity = (id: number) => {
    setCart(prevCart => {
      if (prevCart.find(item => item.id === id)?.quantity === 1) {
        return prevCart.filter(item => item.id !== id);
      } else {
        return prevCart.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  //remove from cart
  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(cart => cart.id !== id));
  };

  //clear cart
  const clearCart = () => {
    setCart([]);
  };

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
