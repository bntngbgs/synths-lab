import CartButton from '../components/CartButton';
import SearchBar from '../components/SearchBar';
import UserIcon from '../components/UserIcon';
import { IoMenu } from 'react-icons/io5';

const Header = () => {
  return (
    <header className="container mx-auto py-6 flex items-center justify-between">
      <h1 className="font-logo text-arsenic text-4xl lg:text-5xl ">Synths</h1>
      <nav className="hidden md:flex">
        <ul className="font-body flex text-xl gap-8 uppercase tracking-wide font-medium">
          <li>Home</li>
          <li>Products</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="hidden md:flex items-center gap-4">
        <SearchBar />
        <CartButton />
        <UserIcon />
      </div>
      <div className="block sm:hidden">
        <IoMenu size={32} />
      </div>
    </header>
  );
};
export default Header;
