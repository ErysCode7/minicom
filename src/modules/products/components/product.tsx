import { Products } from '@/services/products/types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import StarRatings from 'react-star-ratings';

type Props = {
  product: Products;
};

const Product = ({ product }: Props) => {
  const router = useRouter();

  const rate = Math.round(product?.rating?.rate ?? 0) as number;

  return (
    <div className="bg-white rounded-md shadow-md transition duration-500 lg:hover:scale-105 flex-flex-col">
      <div
        onClick={() => router.push(`/product/${product?.id}`)}
        className="relative h-[200px] w-[200px] m-auto lg:cursor-pointer"
      >
        <Image src={product.image} alt={product.title} fill />
      </div>
      <div className="flex flex-col px-5 py-5 relative h-40">
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
        <p className="text-sm text-gray-500 absolute bottom-5">${product.price}</p>
      </div>
    </div>
  );
};

export default Product;
