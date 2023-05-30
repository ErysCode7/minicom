import ProductList from './product-list';
import ProductsFilter from './products-filter';

type Props = {
  isError: unknown;
};

const Products = ({ isError }: Props) => {
  if (isError) {
    return (
      <div>
        <h1>hELLO</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-between gap-5 w-[90%] lg:w-[85%] m-auto my-10">
      <div className="hidden sm:block w-48 flex-shrink-0">
        <ProductsFilter />
      </div>

      <div className="flex-grow">
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
