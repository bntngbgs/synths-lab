const Promo = () => {
  return (
    <div className="container mx-auto mt-24 grid grid-cols-3 grid-rows-2 gap-2">
      <div className="bg-[#f6b8d0] h-48 rounded text-white-smoke text-4xl font-heading font-bold">
        Promo 1
      </div>
      <div className="bg-[#d1feb8] h-48 rounded">Promo 2</div>
      <div className="bg-[#d5f6fb] row-span-2 rounded">Promo 3</div>
      <div className="bg-[#ffddb3] h-48 col-span-2 rounded">Promo 4</div>
    </div>
  );
};
export default Promo;
