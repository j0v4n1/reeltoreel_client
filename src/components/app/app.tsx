import './app.css';
import Header from '../header/header.tsx';
import Hero from '../hero/hero.tsx';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
