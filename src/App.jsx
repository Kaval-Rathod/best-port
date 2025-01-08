import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import WebDeveloper from './components/pages/WebDeveloper';
import UXDesigner from './components/pages/UXDesigner';
import ReactNative from './components/pages/ReactNative';

const roles = [
  { path: '/', title: 'Web Developer' },
  { path: '/ux', title: 'UI/UX Designer' },
  { path: '/react-native', title: 'React Native Developer' }
];

function RoleSwitcher() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentIndex = roles.findIndex(role => role.path === location.pathname);
  
  const handleSwitch = () => {
    const nextIndex = (currentIndex + 1) % roles.length;
    navigate(roles[nextIndex].path);
  };

  return (
    <motion.button
      className="role-switcher"
      onClick={handleSwitch}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ArrowPathIcon className="w-6 h-6" />
    </motion.button>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-8 right-8 p-4 bg-white dark:bg-black border border-black dark:border-white rounded-full transition-all duration-500 hover:scale-110"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <SunIcon className="w-6 h-6" />
        ) : (
          <MoonIcon className="w-6 h-6" />
        )}
      </button>

      <RoleSwitcher />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen"
        >
          <Routes>
            <Route path="/" element={<WebDeveloper />} />
            <Route path="/ux" element={<UXDesigner />} />
            <Route path="/react-native" element={<ReactNative />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
