import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type CartItem = {
  id: number;
  quantity: number;
};

type CartState = {
  // ----- STATE -----
  cart: CartItem[];
  productLength: number;

  // ----- STATE FUNC -----
  setProductLength: (length: number) => void;

  // ----- CART FUNCTIONS -----
  getItemsQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        // ----- STATE -----
        cart: [],
        productLength: 0,

        // ----- STATE FUNC -----

        // SET PRODUCT LENGTH
        setProductLength: (length: number) => set({ productLength: length }),

        // GET QUANTITY PER ITEM IN CART
        getItemsQuantity: (id: number) => {
          const item = get().cart.find(item => item.id === id);
          return item ? item.quantity : 0;
        },

        // ----- CART FUNCTIONS -----

        // INCREASE OR ADD ITEM IN CART
        increaseCartQuantity: (id: number) => {
          set(state => {
            if (state.cart.find(item => item.id == id) == null) {
              return {
                cart: [...state.cart, { id, quantity: 1 }],
              };
            } else {
              const newCart = state.cart.map(item => {
                if (item.id === id) {
                  return {
                    ...item,
                    quantity: item.quantity + 1,
                  };
                } else {
                  return item;
                }
              });

              return { cart: newCart };
            }
          });
        },

        // DECREASE ITEM IN CART
        decreaseCartQuantity: (id: number) => {
          set(state => {
            if (state.cart.find(item => item.id === id)?.quantity === 1) {
              return {
                cart: state.cart.filter(item => item.id !== id),
              };
            } else {
              const newCart = state.cart.map(item => {
                if (item.id === id) {
                  return {
                    ...item,
                    quantity: item.quantity - 1,
                  };
                } else {
                  return item;
                }
              });

              return { cart: newCart };
            }
          });
        },

        // REMOVE ITEM FROM CART
        removeFromCart: (id: number) =>
          set(state => ({ cart: state.cart.filter(item => item.id !== id) })),

        // CLEAR ALL FROM CART
        clearCart: () => set({ cart: [] }),
      }),
      {
        name: 'cart-storage',
      },
    ),
  ),
);
