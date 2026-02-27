import React, { useState } from 'react';
import { karnatakaColleges, keralaColleges, tamilNaduColleges } from '../data/colleges';
import './Colleges.css';

const ChevronDown = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

const CollegeModal = ({ college, onClose }) => {
    if (!college) return null;

    return (
        <div className="college-modal-overlay" onClick={onClose}>
            <div className="college-modal-content glass-card" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>
                <div className="modal-header">
                    <h2>{college.name}</h2>
                    <span className="badge">{college.type}</span>
                    <p className="location"><span className="icon">📍</span> {college.location}</p>
                </div>

                <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '15px', padding: '20px 0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '15px 20px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                        <div>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: 'var(--text-main)' }}>Fee Structure, Brochure & Videos</h3>
                            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Get detailed fee breakdown, official prospectus, and campus tours</p>
                        </div>
                        <a href="#" className="btn btn-primary" style={{ textDecoration: 'none', padding: '10px 20px', whiteSpace: 'nowrap' }}>Click Here</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CollegeCard = ({ college, onViewDetails }) => (
    <div className="college-card glass-card">
        <div className="college-content">
            <span className="badge">{college.type}</span>
            <h3>{college.name}</h3>
            <p className="location">
                <span className="icon">📍</span> {college.location}
            </p>
        </div>
        <div className="card-actions">
            <button className="view-details-btn" onClick={() => onViewDetails(college)}>View Details</button>
        </div>
    </div>
);

const CityAccordion = ({ data, searchTerm, expandedCity, toggleCity, onViewDetails }) => {
    return (
        <div className="city-accordion">
            {Object.entries(data).map(([city, colleges]) => {
                const filteredCityColleges = colleges.filter(c =>
                    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    c.location.toLowerCase().includes(searchTerm.toLowerCase())
                );

                if (searchTerm && filteredCityColleges.length === 0) return null;

                const displayColleges = searchTerm ? filteredCityColleges : colleges;
                const isExpanded = expandedCity === city || searchTerm;

                return (
                    <div key={city} className={`accordion-item ${isExpanded ? 'expanded' : ''}`}>
                        <button
                            className="accordion-header"
                            onClick={() => !searchTerm && toggleCity(city)}
                            style={{ cursor: searchTerm ? 'default' : 'pointer' }}
                        >
                            <span className="city-name">{city} <span className="count">({displayColleges.length})</span></span>
                            {!searchTerm && (
                                <span className={`accordion-icon ${expandedCity === city ? 'rotated' : ''}`}>
                                    <ChevronDown />
                                </span>
                            )}
                        </button>

                        <div className="accordion-content" style={{ display: isExpanded ? 'block' : 'none' }}>
                            <div className="college-list">
                                {displayColleges.map((college, idx) => (
                                    <CollegeCard key={idx} college={college} onViewDetails={onViewDetails} />
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default function Colleges() {
    const [activeTab, setActiveTab] = useState('kerala');
    const [expandedCity, setExpandedCity] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCollege, setSelectedCollege] = useState(null);

    const toggleCity = (city) => {
        setExpandedCity(expandedCity === city ? null : city);
    };

    const handleViewDetails = (college) => {
        setSelectedCollege(college);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setSelectedCollege(null);
        document.body.style.overflow = 'auto';
    };

    const filteredKerala = keralaColleges.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section id="colleges" className="section colleges-section">
            <div className="container">
                <h2 className="section-title">Top Colleges Directory</h2>
                <span className="section-subtitle">Find Your Dream Campus</span>

                <div className="colleges-controls">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search by college name or location..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="tabs">
                        <button
                            className={`tab-btn ${activeTab === 'kerala' ? 'active' : ''}`}
                            onClick={() => setActiveTab('kerala')}
                        >
                            Kerala
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'karnataka' ? 'active' : ''}`}
                            onClick={() => setActiveTab('karnataka')}
                        >
                            Karnataka
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'tamilnadu' ? 'active' : ''}`}
                            onClick={() => setActiveTab('tamilnadu')}
                        >
                            Tamil Nadu
                        </button>
                    </div>
                </div>

                <div className="colleges-grid">
                    {activeTab === 'kerala' && (
                        <div className="college-list">
                            {filteredKerala.length > 0 ? (
                                filteredKerala.map((college, idx) => (
                                    <CollegeCard key={idx} college={college} onViewDetails={handleViewDetails} />
                                ))
                            ) : (
                                <p className="no-results">No colleges found matching "{searchTerm}"</p>
                            )}
                        </div>
                    )}

                    {activeTab === 'karnataka' && (
                        <CityAccordion
                            data={karnatakaColleges}
                            searchTerm={searchTerm}
                            expandedCity={expandedCity}
                            toggleCity={toggleCity}
                            onViewDetails={handleViewDetails}
                        />
                    )}

                    {activeTab === 'tamilnadu' && (
                        <CityAccordion
                            data={tamilNaduColleges}
                            searchTerm={searchTerm}
                            expandedCity={expandedCity}
                            toggleCity={toggleCity}
                            onViewDetails={handleViewDetails}
                        />
                    )}
                </div>
            </div>

            <CollegeModal college={selectedCollege} onClose={handleCloseModal} />
        </section>
    );
}

