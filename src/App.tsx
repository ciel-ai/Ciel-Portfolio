import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Home = lazy(() => import('./pages/Home'));
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketing'));
const Tech = lazy(() => import('./pages/Tech'));
const Production = lazy(() => import('./pages/Production'));
const Podcasts = lazy(() => import('./pages/Podcasts'));

function RouteFallback() {
  return (
    <main className="min-h-[60vh] bg-ciel-primary px-4 py-24 text-ciel-cream">
      <div className="mx-auto max-w-[1400px] border-[4px] border-ciel-ink bg-ciel-accent p-8 font-display text-4xl shadow-brutal">
        LOADING CIEL
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ciel-primary text-ciel-cream">
      <Navbar />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/production" element={<Production />} />
          <Route path="/podcasts" element={<Podcasts />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}
