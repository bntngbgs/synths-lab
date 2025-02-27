import heroImage from '../assets/images/test-bg-2.jpg';
import { MdOutlineArrowOutward } from 'react-icons/md';

const Hero = () => {
  return (
    <div className="mt-2 md:mt-9">
      <div className="container mx-auto">
        <h1 className="text-3xl md:max-w-[20ch] font-heading sm:text-4xl md:text-5xl lg:text-7xl leading-snug tracking-wide">
          YOUR ESSENTIALS BEAUTY PRODUCTS AND FASHION ALL IN ONE PLACE.
        </h1>
        <a
          href="#"
          className="bg-arsenic text-white-smoke text-sm lg:text-lg flex gap-1.5 items-center border-2 w-max py-1 pl-3 lg:pl-4 pr-2 rounded-2xl mt-3"
        >
          Explore products
          <MdOutlineArrowOutward size={18} />
        </a>
      </div>
      <img
        src={heroImage}
        alt="hero image"
        className="w-full h-[360px] md:h-[380px] lg:h-[480px] object-cover md:object-center mt-12 md:mt-24"
      />
    </div>
  );
};
export default Hero;
