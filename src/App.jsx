import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroLandingPage from './components/IntroLandingPage';
import MainCompanyPage from './components/MainCompanyPage';

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#F2FAF4' }}>
      <AnimatePresence mode="wait">
        {!entered ? (
          <IntroLandingPage key="intro" onEnter={() => setEntered(true)} />
        ) : (
          <MainCompanyPage key="main" />
        )}
      </AnimatePresence>
    </div>
  );
}
