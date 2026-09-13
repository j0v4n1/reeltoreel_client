import './app.css';
import Header from '../header/header.tsx';
import RunningLine from '../running-line/running-line.tsx';
import Hero from '../hero/hero.tsx';
import Categories from '../categories/categories.tsx';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <RunningLine />
        <Categories />
      </main>
    </div>
  );
}

export default App;
