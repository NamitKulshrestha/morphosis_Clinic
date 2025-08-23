import React, { useEffect, useState } from "react";
import '../css/Section.css';

export default function NavBar({ scrollToSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const welcomeSection = document.getElementById("welcome");

    if (!welcomeSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5, // adjust sensitivity
      }
    );

    observer.observe(welcomeSection);

    return () => {
      if (welcomeSection) observer.unobserve(welcomeSection);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'bg-transparent' : 'bg-white shadow'} transition-all`}>
      <div className="container-fluid">
        <a className="navbar-brand mb-0 h1" href="#" style={{ fontFamily: "Eiko", fontWeight: "600" }}>
          Morphosis Clinic
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto">
            {['about', 'doctors', 'bookAppointment', 'gallery', 'contact'].map((section, index) => (
              <li className="nav-item" key={index}>
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => scrollToSection(section)}
                  style={{ fontFamily: "instrument-sans-custom", fontSize: "1.2rem" }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
