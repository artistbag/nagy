import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Books from './pages/Books';
import Projects from './pages/Projects';
import Exhibitions from './pages/Exhibitions';
import Contact from './pages/Contact';
import { RoutePath } from './types';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === RoutePath.HOME;

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path={RoutePath.HOME} element={<Home />} />
          <Route path={RoutePath.ABOUT} element={<About />} />
          <Route path={RoutePath.WORKS} element={<Works />} />
          <Route path={RoutePath.BOOKS} element={<Books />} />
          <Route path={RoutePath.PROJECTS} element={<Projects />} />
          <Route path={RoutePath.EXHIBITIONS} element={<Exhibitions />} />
          <Route path={RoutePath.CONTACT} element={<Contact />} />
        </Routes>
      </main>
      {!isHome && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
};

export default App;