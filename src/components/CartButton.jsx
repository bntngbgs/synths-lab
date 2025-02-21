import { TbShoppingCart } from 'react-icons/tb';

const CartButton = () => {
  return (
    <div className="relative">
      <TbShoppingCart size={30} />
      <span className="bg-red-600 text-white-smoke py-0.5 px-1.5 rounded-full text-xs absolute -top-2 -right-1">
        7
      </span>
    </div>
  );
};
export default CartButton;
