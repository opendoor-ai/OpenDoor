import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProcessPage from './pages/ProcessPage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import SupportPage from './pages/SupportPage';
import FloatingActions from './components/FloatingActions';
import { motion, AnimatePresence } from 'motion/react';
import { ViewModeProvider } from './context/ViewModeContext';

export default function App() {
  return (
    <ViewModeProvider>
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </AnimatePresence>
        <FloatingActions />
      </Router>
    </ViewModeProvider>
  );
}
