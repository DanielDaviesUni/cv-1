import './App.css';
import Navbar from '../src/components/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/pages/home'
import React, { useRef } from 'react';
import Footer from '../src/components/footer'
import Projects from './components/pages/projects';
import fc from './components/pages/fotoceramic/fc'

function App() {

  const footerRef = useRef(null);

  const scrollToFooter = () => {
    console.log('scrollToFooter called');
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Router>
        <Navbar scrollToFooter={scrollToFooter}/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/projects' exact Component={Projects}/>
          <Route path='/fc' exact Component={fc}/>
        </Routes>
        <Footer footerRef={footerRef} />
      </Router>
    </>
  );
}

export default App;
