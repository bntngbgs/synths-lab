import heroImage from '../assets/test-bg-2.jpg';
import { MdOutlineArrowOutward } from 'react-icons/md';

const Hero = () => {
  return (
    <div className="mt-9">
      <div className="container mx-auto">
        <h1 className="w-[20ch] font-heading text-7xl leading-snug tracking-wide">
          YOUR ESSENTIALS BEAUTY PRODUCTS AND FASHION ALL IN ONE PLACE.
        </h1>
        <a
          href="#"
          className="bg-arsenic text-white-smoke text-lg flex gap-2 items-center border-2 w-max py-1 pl-4 pr-2 rounded-2xl mt-3"
        >
          Explore products
          <MdOutlineArrowOutward size={24} />
        </a>
      </div>
      <img
        src={heroImage}
        alt="hero image"
        className="w-full h-[540px] object-cover object-center mt-24"
      />
    </div>
  );
};
export default Hero;
