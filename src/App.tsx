import React, { useState } from 'react';
import { GradientBackground } from './components/ui/GradientBackground';
import { HomePage } from './pages/HomePage';
import { CalculatorPage } from './pages/CalculatorPage';
import { Footer } from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'calculator'>('home');

  return (
    <GradientBackground>
      <div className="min-h-screen">
        {currentPage === 'home' ? (
          <HomePage onCalculateClick={() => setCurrentPage('calculator')} />
        ) : (
          <CalculatorPage onBackClick={() => setCurrentPage('home')} />
        )}
        <Footer />
      </div>
    </GradientBackground>
  );
}

export default App;