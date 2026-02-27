import React from 'react';

const services = [
    {
        title: "Admission Guidance",
        icon: "🎓",
        description: "End-to-end support for securing admission in top colleges across Kerala and Karnataka."
    },
    {
        title: "Career Counselling",
        icon: "🧭",
        description: "Personalized mentoring to help you choose the right course and career path based on your aptitude."
    },
    {
        title: "College Selection",
        icon: "🏛️",
        description: "Deep insights into college infrastructure, placements, and faculties to make informed decisions."
    },
    {
        title: "Application Support",
        icon: "📝",
        description: "Hassle-free assistance with application forms, documentation, and submission processes."
    },

    {
        title: "Direct Admission",
        icon: "🤝",
        description: "Legitimate support for management quota admissions in reputed institutions."
    }
];

export default function Services() {
    return (
        <section id="services" className="section" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <h2 className="section-title">Our Expertise</h2>
                <span className="section-subtitle">Comprehensive Educational Services</span>

                <div className="services-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    marginTop: '40px'
                }}>
                    {services.map((service, idx) => (
                        <div key={idx} className="glass-card service-card" style={{
                            textAlign: 'center',
                            padding: '40px 30px',
                            transition: 'transform 0.3s ease'

                        }}>
                            <div className="icon" style={{ fontSize: '3rem', marginBottom: '20px' }}>{service.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--text-main)' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
