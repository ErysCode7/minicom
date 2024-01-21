// Importing dependencies and utilities
import { useCartStore } from '@/store/cart';
import { useLayoutStateStore } from '@/store/layout';
import { LAYOUT_STATE, ROUTES } from '@/utils/constants';
import { isObjectEmpty } from '@/utils/helpers';
import { useRouter } from 'next/router';

// React component definition for Footer
const Footer = () => {
  // Initializing Next.js router
  const router = useRouter();
  const { pathname, query } = router;

  // Getting the current year
  const date = new Date().getFullYear();

  // Retrieving state from the Cart store
  const { cart, productLength } = useCartStore(state => ({
    cart: state.cart,
    productLength: state.productLength,
  }));

  // Retrieving state from the Layout store
  const { layoutState } = useLayoutStateStore(state => ({ layoutState: state.layoutState }));

  // Destructuring route constants for better readability
  const { CART, PRODUCTS, SIGN_IN, SIGN_UP, USER_PROFILE } = ROUTES;

  // Logic to determine whether the footer should stick to the bottom
  let shouldStickToBottom = false;

  switch (pathname) {
    case PRODUCTS:
      // Stick to bottom if product count is less than or equal to 4 and not in vertical layout
      shouldStickToBottom = productLength <= 4 && layoutState !== LAYOUT_STATE.vertical;
      break;
    case CART:
      // Stick to bottom if cart length is less than or equal to 1
      shouldStickToBottom = cart?.length <= 1;
      break;
    case SIGN_IN:
    case SIGN_UP:
      // Always stick to bottom for sign-in and sign-up pages
      shouldStickToBottom = true;
      break;
    case USER_PROFILE:
      // Stick to bottom if user profile route and query is not empty
      shouldStickToBottom = !isObjectEmpty(router.query);
      break;
    default:
      // Do not stick to bottom by default
      shouldStickToBottom = false;
  }

  // Compose footer classes based on the stick-to-bottom condition
  const footerClasses = `w-full h-20 shadow-sm bg-white ${
    shouldStickToBottom && 'standard:absolute bottom-0'
  }`;

  // Rendering the Footer component
  return (
    <footer className={footerClasses}>
      <div className="flex items-center m-auto h-full w-[90%] lg:w-[85%]">
        <h2 className="text-gray-500 text-xs sm:text-sm">
          Minicom <span className="text-blue-500">©{date}.</span> All rights reserved
        </h2>
      </div>
    </footer>
  );
};

// Exporting the Footer component as the default export
export default Footer;
