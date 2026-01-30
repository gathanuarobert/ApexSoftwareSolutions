import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './pages/Loader'; // Path to your new file
import LandingPage from './pages/LandingPage'; // Your main page

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-[#0a0a0a]">
      <AnimatePresence mode="wait">
        {loading && (
          <Loader key="loader" finishLoading={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* This renders the site content only after loading is done or fades it in */}
      {!loading && (
        <LandingPage />
      )}
    </div>
  );
}

export default App;