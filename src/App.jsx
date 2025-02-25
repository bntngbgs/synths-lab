import Footer from './sections/Footer';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Products from './sections/Products';
import Promo from './sections/Promo';
import Testimonials from './sections/Testimonials';

const App = () => {
  return (
    <>
      <div className="pattern-background"></div>
      <Header />
      <Hero />
      <Promo />
      <Products />
      <Testimonials />
      <Footer />
    </>
  );
};
export default App;
