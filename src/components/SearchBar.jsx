import { RiSearch2Line } from 'react-icons/ri';

const SearchBar = () => {
  return (
    <div className="flex items-center border-2 py-0.5 px-2 rounded-4xl w-2xs">
      <input
        type="text"
        name="search-product"
        id="search-product"
        placeholder="search products..."
        className="mr-auto"
      />
      <RiSearch2Line size={28} />
    </div>
  );
};
export default SearchBar;
