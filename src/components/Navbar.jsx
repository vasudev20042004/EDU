import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <a href="#" className="logo">Edu<span>Mentor</span></a>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#colleges" onClick={() => setIsOpen(false)}>Colleges</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="btn btn-outline" style={{ padding: '8px 24px' }}>Partner With Us</a>
                </div>
            </div>
        </nav>
    );
}
