import React from "react";
import "../css/Section.css";

export default function About() {
  return (
    <section id="about" className="rounded-2xl shadow-md p-6 compartment" data-aos="zoom-in-up">
      <div className="about-flex">
        <div className="about-heading">
          <h2 className="text-2xl font-semibold heading">About Us</h2>
        </div>
        <div className="about-text">
          <p className="instrument-sans-custom text-gray-700 leading-relaxed">
            Welcome to Morphosis Clinic, where healing meets compassion and science blends seamlessly with nature.
            Founded by Dr. Mansi and Dr. Yashasvi, our clinic is built on a shared vision: to offer holistic and individualized care 
            through classical homeopathy. With years of experience and deep-rooted passion for natural healing, both doctors are committed 
            to treating not just the disease, but the person as a whole—mind, body, and soul.
            <br></br>
            🌿 What Sets Us Apart:
            Personalized Care: Every case is unique. We listen, understand, and treat accordingly.
            Root-Cause Healing: We believe in treating the root cause, not just suppressing symptoms.
            Safe & Gentle Medicine: No side effects, no harsh chemicals—just nature's wisdom.
            Experienced Team: Dr. Mansi and Dr. Yashasvi bring clinical expertise in managing chronic and acute cases like PCOD, 
            joint pain, kidney stones, allergies, skin disorders, pediatric illnesses, hormonal imbalances, and more.
            At Morphosis Clinic, we don't just prescribe—we partner with you on your journey to better health.
          </p>
        </div>
      </div>
    </section>

  );
}
