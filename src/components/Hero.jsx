import React from 'react';

export default function Hero() {
    return (
        <section id="home" className="hero-section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(rgba(11,16,27,0.85), rgba(11,16,27,0.95)), url("https://placehold.co/1920x1080/0B1120/D4AF37?text=Education+Consultancy")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            paddingTop: '80px'
        }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
                <div className="hero-content animate-fade-in">
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '20px' }}>
                        Transforming Dreams into <span style={{ color: 'var(--accent-gold)' }}>Top College</span> Admissions
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '600px' }}>
                        Expert guidance for securing your seat in Kerala's and Karnataka's most prestigious institutions. Your future, our priority.
                    </p>
                    <div className="cta-group" style={{ display: 'flex', gap: '20px' }}>
                        <a href="#contact" className="btn btn-primary">Book Consultation</a>
                        <a href="#colleges" className="btn btn-outline">Explore Colleges</a>
                    </div>

                    <div className="stats" style={{ display: 'flex', gap: '40px', marginTop: '60px' }}>
                        <div>
                            <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent-gold)' }}>500+</span>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Students Placed</p>
                        </div>
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
                            src="https://placehold.co/500x600/151E2E/D4AF37?text=Consultant+Portrait"
                            alt="Education Consultant"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
