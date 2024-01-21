export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PRODUCTS: '/products',
  CART: '/cart',
  SIGN_UP: '/sign-up/[[...index]]',
  SIGN_IN: '/sign-in/[[...index]]',
  USER_PROFILE: '/user-profile/[[...index]]',
} as const;

export const LAYOUT_STATE = {
  horizontal: 'horizontal',
  vertical: 'vertical',
};
