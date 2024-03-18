import { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';

import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Skills/Skills";

const validRoutes = ['/Portfolio/', '/about', '/skills', '/experience', '/projects', '/contact'];

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  // Add logic to redirect to home page if the path is not recognized
  if (!validRoutes.includes(pathname)) {
    return <Navigate to="/Portfolio/" replace />;
  }

  return null; // This component doesn't render anything
};

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/Portfolio/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;