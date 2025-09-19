import React, { useEffect, useState } from "react";  // ⬅️ add useEffect + useState
import '../css/Welcome.css';
import '../css/Section.css';
import Image_1 from '../images/interior1.jpg';
import Image_2 from '../images/interior2.jpg';
import Image_3 from '../images/interior3.jpg';

export default function Welcome() {
  const [announcement, setAnnouncement] = useState("");  // ⬅️ state for announcement

  useEffect(() => {
    fetch("http://localhost:4000/announcement")   // ⬅️ fetch from admin backend
      .then((res) => res.json())
      .then((data) => {
        setAnnouncement(data.text || "");
      })
      .catch((err) => console.error("Error fetching announcement:", err));
  }, []);

  const scrollToAppointment = () => {
    const section = document.getElementById('bookAppointment');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const caption = (
    <div className="custom-caption instrument-sans-custom text-white text-center">
      <h1>Morphosis Clinic</h1>
      <button 
        onClick={scrollToAppointment} 
        className="btn btn-outline-light"
      >
        Book an Appointment
      </button>
    </div>
  );

  return (
    <div>
      {/* 🔹 Announcement Bar */}
      {announcement && (   /* ⬅️ show only if announcement exists */
        <div className="announcement-bar">
          <div className="announcement-text">
            <span>{announcement}</span>   {/* ⬅️ dynamic announcement */}
          </div>
        </div>
      )}

      {/* 🔹 Carousel Section */}
      <div className="custom-carousel">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Image_1} className="d-block w-100" alt="Clinic Interior" />
              {caption}
            </div>
            <div className="carousel-item">
              <img src={Image_2} className="d-block w-100" alt="Modern Equipment" />
              {caption}
            </div>
            <div className="carousel-item">
              <img src={Image_3} className="d-block w-100" alt="Clinic Services" />
              {caption}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
