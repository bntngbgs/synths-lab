import { ImQuotesLeft } from 'react-icons/im';
import { FaStar } from 'react-icons/fa';

const TestimonialsCard = ({ name, text, imageSrc, rating }) => {
  return (
    <div className="bg-white py-4 px-7 rounded">
      <ImQuotesLeft size={38} color={'#cfcfc4'} />
      <p className="mt-4 text-gray-500">{text}</p>
      <div className="flex items-center gap-4 mt-4">
        <img
          src={imageSrc}
          alt="user image"
          className="max-w-14 sm:max-w-20 rounded-full"
        />
        <div>
          <h3 className="font-bold sm:text-xl">{name}</h3>
          <div className="flex item-center gap-2">
            <FaStar color={'#FDCC0D'} />
            <p className="leading-tight">{rating} / 5.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialsCard;
