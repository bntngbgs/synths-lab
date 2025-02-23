import superSale from '../assets/sale.png';
import freeShipping from '../assets/shipping.png';
import fullyCrafted from '../assets/crafted-2.png';

const Promo = () => {
  return (
    <div className="container mx-auto mt-24 grid grid-cols-3 grid-rows-2 gap-4">
      <div className="bg-[#efdfd8] h-48 rounded p-4 relative overflow-hidden">
        <h3 className="text-4xl font-heading font-bold text-white-smoke">
          Super Sale
        </h3>
        <p className="text-white-smoke text-xl max-w-[22ch] mt-2 leading-6">
          Don&apos;t miss out on the chance to have great deals on your favorite
          items.
        </p>
        <img
          src={superSale}
          alt="super sale"
          className="w-48 absolute right-0 top-8"
        />
      </div>
      <div className="bg-[#cfcfc4] h-48 rounded p-4 relative overflow-hidden">
        <h3 className="text-4xl font-heading font-bold text-white-smoke">
          Fully Crafted
        </h3>
        <p className="text-white-smoke text-xl max-w-[22ch] mt-2 leading-6">
          Craftsmen pay attention to every small detail, ensuring high quality.
        </p>
        <img
          src={fullyCrafted}
          alt="super sale"
          className="w-48 absolute right-0 -top-2"
        />
      </div>

      <div className="bg-[#dad4b6] row-span-2 p-4 rounded relative overflow-hidden">
        <h3 className="text-4xl font-heading font-bold text-white-smoke">
          Free Shipping
        </h3>
        <p>
          Enjoy free shipping when you spend $50 or more. It&apos;s a great
          opportunity to stock up on essentials or try something new.
        </p>
        <img
          src={freeShipping}
          alt="super sale"
          className="w-[360px] absolute bottom-0 left-1/2 transform -translate-x-1/2"
        />
      </div>
      <div className="bg-[#e7d7ca] h-48 col-span-2 p-4 rounded">
        <h3 className="text-4xl font-heading font-bold text-white-smoke">
          Start from 99K
        </h3>
      </div>
    </div>
  );
};
export default Promo;
