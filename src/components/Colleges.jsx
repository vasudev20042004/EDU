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

const CollegeCard = ({ college }) => (
    <div className="college-card glass-card">
        <div className="college-content">
            <span className="badge">{college.type}</span>
            <h3>{college.name}</h3>
            <p className="location">
                <span className="icon">📍</span> {college.location}
            </p>
        </div>
        <button className="enquire-btn">Enquire Now</button>
    </div>
);

const CityAccordion = ({ data, searchTerm, expandedCity, toggleCity }) => {
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
                                    <CollegeCard key={idx} college={college} />
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

    const toggleCity = (city) => {
        setExpandedCity(expandedCity === city ? null : city);
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
                                    <CollegeCard key={idx} college={college} />
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
                        />
                    )}

                    {activeTab === 'tamilnadu' && (
                        <CityAccordion
                            data={tamilNaduColleges}
                            searchTerm={searchTerm}
                            expandedCity={expandedCity}
                            toggleCity={toggleCity}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
