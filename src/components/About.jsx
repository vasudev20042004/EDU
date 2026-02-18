import React from 'react';

export default function About() {
    return (
        <section id="about" className="about-section" style={{
            padding: '80px 0',
            background: 'var(--bg-card)'
        }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                <div className="about-image" style={{
                    position: 'relative',
                    padding: '20px',
                    background: 'linear-gradient(135deg, var(--bg-card), var(--glass-bg))',
                    borderRadius: '50% 10% 20% 40%',
                    overflow: 'hidden'
                }}>
                    <img
                        src="https://placehold.co/400x500/151E2E/D4AF37?text=Expert+Consultant"
                        alt="About Consultant"
                        style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                    />
                </div>

                <div className="about-content">
                    <h2 className="section-title" style={{ textAlign: 'left' }}>Your Guide to a Bright Future</h2>
                    <span className="section-subtitle" style={{ textAlign: 'left', display: 'block', marginBottom: '20px' }}>Meet Your Consultant</span>

                    <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
                        With over a decade of experience in education consultancy, I specialize in bridging the gap between student aspirations and academic realities. Based in Bangalore, I have personally guided over 500 students into prestigious institutions across Kerala and Karnataka.
                    </p>

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
                        <p className="role" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Lead Admission Consultant</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
