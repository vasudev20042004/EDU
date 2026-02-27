import React from 'react';
import heroImage from '../assets/pranav2.jpeg';

export default function Hero() {
    return (
        <section id="home" className="hero-section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            paddingTop: '80px'
        }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
                <div className="hero-content animate-fade-in">
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '20px' }}>
                        Your Trusted <span style={{ color: 'var(--accent-gold)' }}>B2B Education</span> Partner
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '600px' }}>
                        Empowering consultancies with exclusive B2B access to top-tier institutions across Kerala, Karnataka, and Tamil Nadu. Enhance your placement success with our dedicated support and priority processing.
                    </p>
                    <div className="cta-group" style={{ display: 'flex', gap: '20px' }}>
                        <a href="#contact" className="btn btn-primary">Partner With Us</a>
                        <a href="#colleges" className="btn btn-outline">Explore Colleges</a>
                    </div>

                </div>

                <div className="hero-image" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="image-wrapper" style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '500px',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        border: '2px solid var(--accent-gold)',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                    }}>
                        <img
                            src={heroImage}
                            alt="Education Consultant"
                            style={{ width: '100%', height: '500px', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
