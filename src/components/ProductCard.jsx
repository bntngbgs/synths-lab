// import test from '../assets/images/test-product.png';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

const ProductCard = () => {
  return (
    <div className="max-w-[350px] p-4 bg-white-smoke border-2 rounded">
      <img
        src="./src/assets/images/test-product.png"
        alt="gambar produk"
        className="rounded-lg"
      />
      <div className="mt-5 flex items-center justify-between">
        <h3 className="text-2xl font-bold">Tas 4</h3>
        <p className="text-2xl font-bold text-gray-600">Rp. 79.000</p>
      </div>
      <p>Stok: 85</p>
      <button className="w-full mt-6 pl-4 py-2 border-2 font-medium flex items-center rounded bg-arsenic text-white-smoke">
        <HiOutlineShoppingBag size={26} />
        <p className="mx-auto">Add to cart</p>
      </button>
    </div>
  );
};
export default ProductCard;
