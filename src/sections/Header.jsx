import { useEffect, useState } from 'react';
import CartButton from '../components/CartButton';
import SearchBar from '../components/SearchBar';
import UserIcon from '../components/UserIcon';
import { IoMenu } from 'react-icons/io5';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  // const handleClick = () => {
  //   setIsMenuOpen(true);
  //   console.log(isMenuOpen);
  // };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', () => setIsMenuOpen(false));

    if (width > 1024) {
      setIsMenuOpen(false);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return (
    <header className="container mx-auto py-6 flex items-center md:justify-between">
      <h1
        onClick={() => console.log(1)}
        className="font-logo text-arsenic text-4xl xl:text-5xl"
      >
        Synths
      </h1>
      <nav className="hidden lg:flex">
        <ul className="font-body flex text-md gap-4 xl:text-xl xl:gap-8 uppercase tracking-wide font-medium">
          <li>Home</li>
          <li>Products</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="sm:flex hidden items-center gap-4 ml-auto lg:ml-0">
        <SearchBar />
        <CartButton />
      </div>

      <div className="hidden md:flex md:ml-6 lg:ml-0">
        <UserIcon />
      </div>

      <div
        className={`block lg:hidden ml-auto sm:ml-3 ${
          isMenuOpen && `bg-gray-400 px-0.5`
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <IoMenu size={32} />
      </div>

      <div
        className={`absolute xl:hidden border-t-2 border-b-2 border-gray-500 top-18 left-0 w-full bg-white-smoke flex flex-col pl-6 gap-4 font-semibold text-lg transform transition-transform ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
      >
        <div className="flex items-center justify-center gap-3 sm:hidden mt-5 pr-6">
          <SearchBar />
          <CartButton />
        </div>

        <p className="text-arsenic sm:pt-6">Home</p>
        <p className="text-arsenic">Products</p>
        <p className="text-arsenic">Testimonials</p>
        <p className="text-arsenic md:pb-6">Contact</p>
        <div className="w-max bg-slate-200 px-3 py-2 mb-6 rounded md:hidden">
          <UserIcon />
        </div>
      </div>
    </header>
  );
};
export default Header;
