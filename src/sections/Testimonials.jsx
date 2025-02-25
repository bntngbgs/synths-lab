import testimonialsData from '../assets/json/testimonials.json';
import TestimonialsCard from '../components/TestimonialsCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <div className="container mt-32 mx-auto">
      <h1 className="section-title text-4xl font-heading font-bold text-center tracking-wide">
        <span>TESTIMONIALS</span>
      </h1>
      <div className="relative">
        <div className="bg-white p-2 w-max rounded shadow-lg absolute top-1/2 transform -translate-y-1/2">
          <FaArrowLeft size={28} color={'gray'} />
        </div>
        <div className="mt-16 flex gap-7 overflow-hidden pl-7">
          {testimonialsData.map((item, index) => (
            <TestimonialsCard key={index} {...item} />
          ))}
        </div>
        <div className="bg-white p-2 w-max rounded shadow-lg absolute right-0 top-1/2 transform -translate-y-1/2">
          <FaArrowRight size={28} color={'gray'} />
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
