import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Doctors from "./components/Doctors";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import BookAppointment from "./components/BookAppointment";
import Welcome from "./components/Welcome";

import './css/Section.css';
import './css/FullPageScroll.css'; 
import FadeInSection from "./FadeInSection";
import Treatments from "./components/Treatment";

export default function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-100 font-sans text-gray-800">
      {/* Navigation Bar */}
      <NavBar scrollToSection={scrollToSection} />

      {/* Main Scrollable Container */}
      <div className="snap-container">
        <div id="welcome" className="snap-section">
          <FadeInSection><Welcome /></FadeInSection>
        </div>

        <div id="about" className="snap-section">
          <FadeInSection><About /></FadeInSection>
        </div>

        <div id="doctors" className="snap-section">
          <FadeInSection><Doctors /></FadeInSection>
        </div>

        <div id="treatments" className="snap-section">
          <FadeInSection><Treatments /></FadeInSection>
        </div>

        <div id="bookAppointment" className="snap-section">
          <FadeInSection><BookAppointment /></FadeInSection>
        </div>

        <div id="gallery" className="snap-section">
          <FadeInSection><Gallery /></FadeInSection>
        </div>

        <div id="contact" className="snap-section">
          <FadeInSection><Contact /></FadeInSection>
        </div>
      </div>
    </div>
  );
}
