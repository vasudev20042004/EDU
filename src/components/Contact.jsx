import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        interest: 'General Inquiry'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your interest! We will contact you shortly.");
        // Here you would integrate with backend or WhatsApp
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section id="contact" className="section contact-section" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <h2 className="section-title">Get Expert Advice</h2>
                <span className="section-subtitle">Start Your Admission Journey Today</span>

                <div className="contact-container" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '60px',
                    marginTop: '60px',
                    alignItems: 'start'
                }}>

                    <div className="contact-info glass-card">
                        <h3>Contact Information</h3>
                        <div className="info-item" style={{ marginBottom: '20px' }}>
                            <span className="icon">📞</span> +91 98765 43210
                        </div>
                        <div className="info-item" style={{ marginBottom: '20px' }}>
                            <span className="icon">✉️</span> info@edumentor.com
                        </div>
                        <div className="info-item" style={{ marginBottom: '20px' }}>
                            <span className="icon">📍</span> MG Road, Bangalore, Karnataka
                        </div>

                        <a href="https://wa.me/919876543210" target="_blank" className="whatsapp-btn btn-primary" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            marginTop: '30px',
                            width: '100%',
                            padding: '15px'
                        }}>
                            <span>💬</span> Chat heavily on WhatsApp
                        </a>
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form glass-card">
                        <h3 style={{ marginBottom: '30px' }}>Book a Free Consultation</h3>

                        <div className="form-group" style={{ marginBottom: '20px' }}>
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', borderRadius: '8px' }}
                            />
                        </div>

                        <div className="form-group" style={{ marginBottom: '20px' }}>
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', borderRadius: '8px' }}
                            />
                        </div>

                        <div className="form-group" style={{ marginBottom: '20px' }}>
                            <label>Interested Course/College</label>
                            <select
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', borderRadius: '8px' }} // Adjusted color for dropdown options visibility
                            >
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Medical">Medical</option>
                                <option value="Nursing">Nursing</option>
                                <option value="Management">Management</option>
                            </select>
                        </div>

                        <button type="submit" className="submit-btn btn-primary" style={{ width: '100%', padding: '15px', fontSize: '1.1rem' }}>
                            Request Call Back
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}
