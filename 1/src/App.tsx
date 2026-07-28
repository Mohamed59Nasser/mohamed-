import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-liquid-beige min-h-screen selection:bg-liquid-gold/30 selection:text-liquid-dark">
      <Header />
      <Hero />
      <Categories />
      <InfoSection />
      <FeaturedProducts />
      <Footer />
    </main>
  );
}

export default App;
