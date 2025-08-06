import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Products from './components/Products';
import News from './components/News';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NavigationProvider } from './context/NavigationContext';

function App() {
  return (
    <NavigationProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Home />
          <Services />
          <Products />
          <News />
          <Careers />
          <Contact />
        </main>
        <Footer />
      </div>
    </NavigationProvider>
  );
}

export default App;