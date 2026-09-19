import './app.css';
import Header from '../header/header.tsx';
import RunningLine from '../running-line/running-line.tsx';
import Hero from '../hero/hero.tsx';
import Categories from '../categories/categories.tsx';
import Products from '../products/products.tsx';
import Subscribe from '../subscribe/subscribe.tsx';
import Footer from '../footer/footer.tsx';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <RunningLine />
        <Categories />
        <Products />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
