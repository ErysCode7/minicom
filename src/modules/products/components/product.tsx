import { Products } from '@/services/products/types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import StarRatings from 'react-star-ratings';
import { LAYOUT_STATE } from '../constants';

type Props = {
  product: Products;
  layoutState?: string;
};

const Product = ({ product, layoutState }: Props) => {
  const router = useRouter();

  const rate = Math.round(product?.rating?.rate ?? 0) as number;

  return (
    <div
      className={`bg-white rounded-md transition duration-500 flex ${
        layoutState === LAYOUT_STATE.vertical
          ? 'flex-col laptop:flex-row sm:p-5 laptop:cursor-pointer'
          : 'flex-col lg:hover:scale-105 shadow-md'
      }`}
    >
      <div
        onClick={() => router.push(`/product/${product?.id}`)}
        className={`relative h-[200px] w-[200px] sm:w-[180px] md:w-[200px] lg:cursor-pointer ${
          layoutState === LAYOUT_STATE.vertical ? 'flex-shrink-0 m-auto' : 'm-auto'
        }`}
      >
        <Image src={product.image} alt={product.title} fill />
      </div>
      <div
        className={`flex flex-col px-5 py-5 relative ${
          layoutState === LAYOUT_STATE.vertical ? 'gap-2' : 'h-40'
        }`}
      >
        <h2
          onClick={() => router.push(`/product/${product?.id}`)}
          className="text-sm lg:text-base font-bold text-blue-500 lg:cursor-pointer hover:underline"
        >
          {product.title.length > 50 ? `${product.title.slice(0, 50)}...` : product.title}
        </h2>
        <div>
          <StarRatings
            starDimension="16px"
            starSpacing="2px"
            rating={rate}
            starRatedColor="rgb(34 197 94)"
            numberOfStars={5}
            name="rating"
          />
        </div>
        <p
          className={`text-sm text-gray-500 ${
            layoutState === LAYOUT_STATE.vertical ? '' : 'absolute bottom-5'
          }`}
        >
          ${product.price}
        </p>
        {layoutState === LAYOUT_STATE.vertical ? (
          <p className="overflow-">{product.id !== 20 ? product.description: product.description.slice(0, 127)}</p>
        ) : null}
      </div>
    </div>
  );
};

export default Product;
