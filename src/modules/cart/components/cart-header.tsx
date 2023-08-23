type Props = {
  cartLength: number;
};

const CartHeader = ({ cartLength }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-bold text-xl sm:text-2xl">Shopping Cart</h2>
      <div>
        <p>{`${cartLength || 0} ${cartLength === 1 ? 'Item' : 'Items'}`}</p>
      </div>
    </div>
  );
};

export default CartHeader;
