import Header from './sections/Header';
import Hero from './sections/Hero';
import Products from './sections/Products';
import Promo from './sections/Promo';

const App = () => {
  return (
    <>
      <div className="pattern-background"></div>
      <Header />
      <Hero />
      <Promo />
      <Products />
    </>
  );
};
export default App;
