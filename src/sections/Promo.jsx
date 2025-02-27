import superSale from '../assets/images/sale.png';
import freeShipping from '../assets/images/shipping.png';
import fullyCrafted from '../assets/images/crafted-2.png';
import startFrom from '../assets/images/start-from.png';

const Promo = () => {
  return (
    <div className="container mx-auto mt-20 md:mt-32 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-4 md:grid-rows-2 gap-3 md:gap-4 items-start">
      <div className="bg-[#d3c7a2] md:h-48 sm:h-48 h-full rounded p-4 pr-0 relative overflow-hidden w-full">
        <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white-smoke">
          Super Sale
        </h3>
        <p className="text-white-smoke text-base sm:text-lg max-w-[32ch] sm:max-w-[26ch] md:max-w-[36ch] lg:max-w-[28ch] xl:max-w-[22ch] mt-2 leading-6">
          Don&apos;t miss out on the chance to have great deals on your favorite
          items.
        </p>
        <img
          src={superSale}
          alt="super sale"
          className="max-w-48 mt-6 sm:mt-0 ml-auto sm:max-w-40 sm:absolute sm:right-0 xl:-right-5 sm:top-4"
        />
      </div>
      <div className="bg-[#cfcfc4] h-full sm:h-48 md:h-48 rounded p-4 pr-0 relative overflow-hidden w-full">
        <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white-smoke">
          Fully Crafted
        </h3>
        <p className="text-white-smoke text-base sm:text-lg max-w-[32ch] sm:max-w-[26ch] md:max-w-[36ch] lg:max-w-[28ch] xl:max-w-[22ch] mt-2 leading-6">
          Craftsmen pay attention to every small detail, ensuring high quality
          products.
        </p>
        <img
          src={fullyCrafted}
          alt="super sale"
          className="max-w-48 ml-auto mt-6 top-0 sm:mt-0 sm:max-w-44 xl:max-w-40 xl:top-2 sm:absolute sm:right-0"
        />
      </div>

      <div className="bg-[#dad4b6] h-full sm:h-48 lg:h-full xl:row-span-2 p-4 rounded relative overflow-hidden w-full">
        <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white-smoke">
          Free Shipping
        </h3>
        <p className="text-white-smoke text-base sm:text-lg max-w-[46ch] sm:max-w-[26ch] md:max-w-[36ch] lg:max-w-[26ch] xl:max-w-[38ch] mt-2 leading-6">
          Enjoy free shipping when you spend $50 or more. It&apos;s a great
          opportunity to stock up on essentials or try something new.
        </p>
        <img
          src={freeShipping}
          alt="super sale"
          className="max-w-[260px] sm:max-w-[300px] xl:max-w-[320px] xl:top-40 mx-auto mt-6 sm:-right-10 md:right-6 lg:-right-16 sm:mt-0 md:max-w-[260px] sm:absolute sm:top-1 lg:top-6 xl:bottom-0 xl:-right-14 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:z-1"
        />
      </div>
      <div className="bg-[#e7d7ca] h-full md:h-48 sm:h-48 xl:col-span-2 p-4 rounded relative overflow-hidden w-full">
        <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white-smoke">
          Start from 99K
        </h3>
        <p className="text-white-smoke text-base sm:text-lg max-w-[46ch] sm:max-w-[26ch] md:max-w-[36ch] lg:max-w-[26ch] xl:max-w-[38ch] mt-2 leading-6">
          Our product starts at just 99K. This makes it accessible for a wide
          range of customers looking for quality without breaking the bank.
        </p>
        <img
          src={startFrom}
          alt="super sale"
          className="max-w-[320px] md:max-w-[280px] xl:max-w-[320px] xl:right-10 xl:mt-2 sm:mt-2 lg:-right-24 mx-auto mt-6 sm:absolute sm:top-0 sm:-right-12 md:bottom-1 md:right-2"
        />
      </div>
    </div>
  );
};
export default Promo;
