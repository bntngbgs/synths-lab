import CartButton from '../components/CartButton';
import SearchBar from '../components/SearchBar';
import UserIcon from '../components/UserIcon';

const Header = () => {
  return (
    <header className="container mx-auto py-6 flex items-center justify-between">
      <h1 className="font-logo text-5xl text-arsenic">Synths</h1>
      <nav>
        <ul className="font-body flex text-xl gap-8 uppercase tracking-wide font-medium">
          <li>Home</li>
          <li>Products</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <SearchBar />
        <CartButton />
        <UserIcon />
      </div>
    </header>
  );
};
export default Header;
