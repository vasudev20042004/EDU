import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Colleges from './components/Colleges';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Colleges />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
