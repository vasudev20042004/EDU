import React from 'react';

export default function Footer() {
    return (
        <footer className="footer" style={{ padding: '60px 0', borderTop: '1px solid var(--glass-border)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
                <div className="footer-links">
                    <h4 style={{ marginBottom: '20px', color: 'var(--accent-gold)' }}>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#colleges">Colleges Directory</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4 style={{ marginBottom: '20px', color: 'var(--accent-gold)' }}>Connect With Us</h4>
                    <ul>
                        <li>
                            <a href="https://facebook.com" target="_blank">Facebook</a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank">Instagram</a>
                        </li>
                        <li>
                            <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-about">
                    <h4 style={{ marginBottom: '20px', color: 'var(--accent-gold)' }}>EduMentor</h4>
                    <p>Helping students secure their dream college since 2012.</p>
                    <p className="copyright" style={{ marginTop: '20px', color: 'var(--text-muted)' }}>
                        © {new Date().getFullYear()} EduMentor. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
