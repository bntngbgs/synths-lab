import heroImage from '../assets/images/test-bg-2.jpg';
import { MdOutlineArrowOutward } from 'react-icons/md';

const Hero = () => {
  return (
    <div className="mt-2 md:mt-9">
      <div className="container mx-auto">
        <h1 className="text-3xl md:w-[20ch] font-heading md:text-7xl leading-snug tracking-wide">
          YOUR ESSENTIALS BEAUTY PRODUCTS AND FASHION ALL IN ONE PLACE.
        </h1>
        <a
          href="#"
          className="bg-arsenic text-white-smoke text-base md:text-lg flex gap-2 items-center border-2 w-max py-1 pl-4 pr-2 rounded-2xl mt-3"
        >
          Explore products
          <MdOutlineArrowOutward size={22} />
        </a>
      </div>
      <img
        src={heroImage}
        alt="hero image"
        className="w-full h-[380px] md:h-[640px] object-cover md:object-center mt-12 md:mt-24"
      />
    </div>
  );
};
export default Hero;
