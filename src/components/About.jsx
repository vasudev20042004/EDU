import React from 'react';

export default function About() {
    return (
        <section id="about" className="about-section" style={{
            padding: '80px 0',
            background: 'var(--bg-card)'
        }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                <div className="about-image" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <div style={{
                        width: '100%',
                        maxWidth: '350px',
                        aspectRatio: '1/1',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                    }}>
                        <img
                            src="/src/assets/pranav1.jpeg"
                            alt="About Consultant"
                            style={{
                                width: '145%',
                                height: '145%',
                                objectFit: 'cover',
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}
                        />
                    </div>
                </div>

                <div className="about-content">
                    <h2 className="section-title" style={{ textAlign: 'left' }}>Empowering Your Consultancy Business</h2>
                    <span className="section-subtitle" style={{ textAlign: 'left', display: 'block', marginBottom: '20px' }}>Your B2B Partner for Guaranteed Admissions</span>

                    <blockquote style={{
                        margin: '0 0 30px 0',
                        padding: '15px 20px',
                        borderLeft: '4px solid var(--accent-gold)',
                        background: 'rgba(212, 175, 55, 0.05)',
                        borderRadius: '0 8px 8px 0'
                    }}>
                        <p style={{ margin: 0, color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: '1.6' }}>
                            "Our mission is to empower independent education consultants and agencies by providing unmatched access, transparent processes, and direct alliances with elite institutions. When you partner with us, you aren't just getting seats; you're gaining a strategic growth engine. Your network's success is our primary focus."
                        </p>
                    </blockquote>

                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px' }}>
                        <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--accent-gold)' }}>✓</span>
                            Specialization in Medical & Engineering Admissions
                        </li>
                        <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--accent-gold)' }}>✓</span>
                            Transparent & Ethical Consulting Practices
                        </li>
                        <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--accent-gold)' }}>✓</span>
                            Direct Partnerships with 50+ Top Colleges
                        </li>
                    </ul>

                    <div className="signature" style={{ marginTop: '40px' }}>
                        <p style={{ fontFamily: 'cursive', fontSize: '1.5rem', color: 'var(--accent-gold)' }}>Abhinav Consultant</p>
                        <p className="role" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Lead Strategic Partner</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
