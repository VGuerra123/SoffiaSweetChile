import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AlfajorCreator from './pages/AlfajorCreator';
import ProductsPage from './pages/ProductsPage';
import FeaturedProducts from './components/FeaturedProducts';
import HowItWorks from './components/HowItWorks';
import ShoppingCart from './components/ShoppingCart';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer';

function App() {
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSubscribed = localStorage.getItem('newsletter-subscribed');
      if (!hasSubscribed) {
        setShowNewsletter(true);
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <ShoppingCart />
          <main>
            <Routes>
              {/* Landing Page */}
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <HowItWorks />
                    <FeaturedProducts />
                  </>
                }
              />

              {/* Página de creación de alfajores */}
              <Route
                path="/create"
                element={<AlfajorCreator />}
              />

              {/* Página de productos */}
              <Route
                path="/products"
                element={<ProductsPage />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
