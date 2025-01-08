import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

// Components
import Header from './components/Header';
import WebDeveloper from './components/pages/WebDeveloper';
import UXDesigner from './components/pages/UXDesigner';
import ReactNative from './components/pages/ReactNative';

// Configuration
import { PERSONAL_INFO } from './config';

const roles = [
  { path: '/', title: PERSONAL_INFO.roles[0] },
  { path: '/ux', title: PERSONAL_INFO.roles[1] },
  { path: '/react-native', title: PERSONAL_INFO.roles[2] }
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
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Apply dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <RoleSwitcher />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen pt-20"
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
