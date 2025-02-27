import testimonialsData from '../assets/json/testimonials.json';
import TestimonialsCard from '../components/TestimonialsCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <div className="container mt-32 mx-auto">
      <h1 className="section-title text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-center tracking-wide">
        <span className="px-5 sm:px-8">TESTIMONIALS</span>
      </h1>
      <div className="relative">
        <div className="bg-white p-2 w-max rounded shadow-lg absolute top-1/2 transform -translate-y-1/2 border-2 border-[#cfcfc4]">
          <FaArrowLeft
            className={`text-[18px] md:text-[22px]`}
            color={'gray'}
          />
        </div>
        <div className="mt-16 overflow-hidden grid grid-flow-col testimonials-grid">
          {Array.from(Array(3).keys()).map((item, index) => (
            <TestimonialsCard key={index} {...testimonialsData[index]} />
          ))}
        </div>
        <div className="bg-white p-2 w-max rounded shadow-lg absolute right-0 top-1/2 transform -translate-y-1/2 border-2 border-[#cfcfc4]">
          <FaArrowRight
            className={`text-[18px] md:text-[22px]`}
            color={'gray'}
          />
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
