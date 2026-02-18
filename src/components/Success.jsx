import React, { useState } from 'react';

const testimonials = [
    {
        name: "Arjun K.",
        college: "KMCT Medical College",
        message: "\"The guidance I received was phenomenal. From shortlisting colleges to the final admission process, everything was smooth.\""
    },
    {
        name: "Sneha P.",
        college: "Acharya Institute",
        message: "\"I was confused about my options in Bangalore. The personalized counselling helped me find the perfect nursing college.\""
    },
    {
        name: "Rahul M.",
        college: "Royal Engineering College",
        message: "\"Highly professional and transparent service. I got my seat without any hassle. Highly recommended!\""
    }
];

export default function Success() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((curr) => (curr + 1) % testimonials.length);
    const prev = () => setCurrent((curr) => (curr - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="success" className="section">
            <div className="container">
                <h2 className="section-title">Success Stories</h2>
                <span className="section-subtitle">What Our Students Say</span>

                <div className="testimonial-slider" style={{
                    position: 'relative',
                    maxWidth: '800px',
                    margin: '40px auto',
                    textAlign: 'center'
                }}>
                    <div className="glass-card testimonial-card" style={{ padding: '60px 40px' }}>
                        <p className="message" style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '30px' }}>
                            {testimonials[current].message}
                        </p>
                        <h4 style={{ color: 'var(--accent-gold)', marginBottom: '5px' }}>{testimonials[current].name}</h4>
                        <span style={{ color: 'var(--text-muted)' }}>Student at {testimonials[current].college}</span>
                    </div>

                    <div className="controls" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <button onClick={prev} className="btn btn-outline" style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%' }}>←</button>
                        <button onClick={next} className="btn btn-outline" style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%' }}>→</button>
                    </div>
                </div>

                <div className="stats-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '30px',
                    marginTop: '60px',
                    textAlign: 'center'
                }}>
                    <div>
                        <h3 style={{ fontSize: '3rem', color: 'var(--accent-gold)' }}>500+</h3>
                        <p>Students Placed</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '3rem', color: 'var(--accent-gold)' }}>50+</h3>
                        <p>Colleges Partnered</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '3rem', color: 'var(--accent-gold)' }}>10+</h3>
                        <p>Years Experience</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
