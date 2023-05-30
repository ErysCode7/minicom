import { useRouter } from 'next/router';

type Props = {};

const Footer = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const date = new Date().getFullYear();

  const STATIC_FOOTER = ['/products', '/product/[id]'];

  return (
    <footer
      className={`w-full h-20 shadow-sm bg-white ${
        !STATIC_FOOTER.includes(pathname) ? 'laptop:absolute bottom-0' : ''
      }`}
    >
      <div className="flex items-center m-auto h-full w-[90%] lg:w-[85%]">
        <h2 className="text-gray-500 text-xs sm:text-sm">
          Minicom <span className="text-blue-500">©{date}.</span> All rights reserved
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
