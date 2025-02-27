import { RiSearch2Line } from 'react-icons/ri';

const SearchBar = () => {
  return (
    <div className="flex w-[380px] sm:w-3xs items-center border-2 py-0.5 px-2 rounded-4xl md:max-w-[280px] lg:max-w-[180px] xl:max-w-full">
      <input
        type="text"
        name="search-product"
        id="search-product"
        placeholder="search products..."
        className="w-full"
      />
      <RiSearch2Line className="text-[24px] shrink-0" />
    </div>
  );
};
export default SearchBar;
