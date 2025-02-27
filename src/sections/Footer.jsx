import { MdOutlineEmail, MdOutlinePhoneInTalk } from 'react-icons/md';
import { IoLogoInstagram } from 'react-icons/io5';
import { BiLogoPinterestAlt } from 'react-icons/bi';
import { RiFacebookFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className="mt-24 bg-arsenic text-white-smoke">
      <div className="container mx-auto pt-16 flex flex-col sm:flex-row sm:flex-wrap justify-between border-b-1 pb-8">
        <div className="text-5xl lg:text-6xl font-logo text-center">
          <h2>Synths</h2>
        </div>
        <div className="mt-10 sm:mt-0 md:mt-2 text-center sm:text-start">
          <h3 className="text-2xl md:max-lg:text-xl font-bold font-heading text-gray-400 mb-3">
            Company
          </h3>
          <ul className="text-lg md:max-lg:text-base">
            <li className="mb-1" onClick={() => console.log(1)}>
              About Us
            </li>
            <li className="mb-1">Testimonials</li>
            <li className="mb-1">Blog</li>
            <li className="mb-1">Features</li>
          </ul>
        </div>
        <div className="mt-10 sm:mt-0 md:mt-2 text-center sm:text-start">
          <h3 className="text-2xl md:max-lg:text-xl font-bold font-heading text-gray-400 mb-3">
            Resources
          </h3>
          <ul className="text-lg md:max-lg:text-base">
            <li className="mb-1">Privacy & Policy</li>
            <li className="mb-1">Customer Service</li>
            <li className="mb-1">Shipping Details</li>
            <li className="mb-1">Terms of Service</li>
            <li className="mb-1">Partnerships</li>
          </ul>
        </div>
        <div className="mt-10 md:mt-2 text-center max-w-max mx-auto md:mx-0">
          <h3 className="text-2xl md:max-lg:text-xl font-bold font-heading text-gray-400 mb-3">
            Contact
          </h3>
          <ul className="text-lg md:max-lg:text-base">
            <li className="mb-2 flex items-center gap-2">
              <MdOutlineEmail size={28} />
              <p>synths.lab@company.com</p>
            </li>
            <li className="mb-2 flex items-center gap-2">
              <MdOutlinePhoneInTalk size={28} />
              <p>+628-11-222-333</p>
            </li>
            <div className="flex gap-7 mt-5 items-center justify-center md:justify-start">
              <div className="bg-white-smoke rounded-full p-2">
                <IoLogoInstagram size={22} color={'#11181c'} />
              </div>
              <div className="bg-white-smoke rounded-full p-2">
                <BiLogoPinterestAlt size={22} color={'#11181c'} />
              </div>
              <div className="bg-white-smoke rounded-full p-2">
                <RiFacebookFill size={22} color={'#11181c'} />
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="container mx-auto pt-6 pb-9">
        <p className="text-center text-gray-400">
          &copy; 2025 Synths Lab. All rights reserved
        </p>
      </div>
    </div>
  );
};
export default Footer;
