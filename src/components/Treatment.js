import React from "react";
import "../css/Section.css";

export default function Treatment() {
  return (
    <section id="treatment" className="compartment fade-in">
      <div className="treatment-container">
        {/* Heading */}
        <h2 className="heading">Our Treatments</h2>

        <div className="treatment-flex">
          {/* Homoeopathic Treatment (Left) */}
          <div className="treatment-block">
            <h3 className="subheading">Homoeopathic Treatment</h3>
            <p className="instrument-sans-custom">
              We diagnose and treat a wide range of conditions with holistic and
              natural remedies.
            </p>
            <ul className="treatment-list instrument-sans-custom">
              <li><strong>Skin Diseases:</strong> Urticaria, eczema, psoriasis, vitiligo, fungal infections, acne, corns, warts, alopecia, premature greying of hair, varicose veins</li>
              <li><strong>Respiratory Diseases:</strong> Cough, cold, flu, asthma, bronchitis, sinusitis, nasal polyp, allergic rhinitis</li>
              <li><strong>Musculoskeletal Disorders:</strong> Joint pain, arthritis, back pain, gout, spondylitis</li>
              <li><strong>Kidney Disorders:</strong> Kidney stones, UTI, bed wetting</li>
              <li><strong>Chronic Diseases:</strong> Diabetes, BP, Thyroid</li>
              <li><strong>Women’s Health:</strong> PCOD, menstrual disorders, fibroid, leucorrhoea, infertility</li>
              <li><strong>Neurological Disorders:</strong> Migraine, epilepsy, stroke recovery</li>
              <li><strong>Pediatric Care:</strong> Fever, allergies, nutrition & growth concerns</li>
              <li><strong>Gastric Disorders:</strong> Acidity, constipation, diarrhoea, IBS, piles, fissures, fistula</li>
              <li><strong>Haematology:</strong> Anemia</li>
              <li><strong>Infectious Diseases:</strong> Dengue, typhoid, malaria, food poisoning</li>
              <li><strong>Mental Disorders:</strong> Anxiety, depression, OCD</li>
            </ul>
          </div>

          {/* Aesthetic Treatment (Right) */}
          <div className="treatment-block">
            <h3 className="subheading">Aesthetic Treatment</h3>
            <p className="instrument-sans-custom">
              Advanced skin & hair treatments designed for rejuvenation and care.
            </p>
            <ul className="treatment-list instrument-sans-custom">
              <li>Carbon Peel</li>
              <li>Tattoo Removal</li>
              <li>Hydra Facial</li>
              <li>Sun Tan Removal</li>
              <li>Medi Facial</li>
              <li>Melasma Treatment</li>
              <li>Skin Whitening</li>
              <li>Skin Tightening</li>
              <li>Skin Rejuvenation</li>
              <li>Acne / Pimples Treatment</li>
              <li>Hair PRP / GFC</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
