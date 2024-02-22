import React, { useState, useEffect } from 'react';
import LoadingPage from './components/Loader.js';
import LandingPage from './components/LandingPage.js';
import './assets/jfry.jpeg';
import './styling/global.css';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); //Clear the timer
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingPage />//Render the Loading comp while loading
      ):(
        <>
          <LandingPage />
          <EasterEggOne unlockPosition={unlockPosition} />
        </>
      )}
    </div>
  );
}
