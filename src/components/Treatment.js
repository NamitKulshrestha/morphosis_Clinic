import React, { useState } from "react";
import "../css/Section.css";

const AccordionItem = ({ id, title, children, activeId, setActiveId }) => {
  const isOpen = activeId === id;

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <button
        type="button"
        className="accordion-header"
        aria-expanded={isOpen}
        onClick={() => setActiveId(isOpen ? null : id)}
      >
        <span>{title}</span>
        <span className="accordion-icon" aria-hidden>
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div className="accordion-content-wrapper" aria-hidden={!isOpen}>
        <div className="accordion-content">
          {children ? children : <span className="instrument-sans-custom">Details available</span>}
        </div>
      </div>
    </div>
  );
};

export default function Treatment() {
  // central state: tracks which accordion is open
  const [activeId, setActiveId] = useState(null);

  return (
    <section id="treatment" className="compartment fade-in">
      <div className="treatment-container">
        <h2 className="heading">Our Treatments</h2>

        <div className="treatment-flex">
          {/* Left column: Homoeopathic */}
          <div className="treatment-block">
            <h3 className="subheading">Homoeopathic Treatment</h3>
            <p className="instrument-sans-custom">
              We diagnose and treat a wide range of conditions with holistic and natural remedies.
            </p>

            <AccordionItem id="skin" title="Skin Diseases" activeId={activeId} setActiveId={setActiveId}>
              Urticaria, eczema, psoriasis, vitiligo, fungal infections, acne, corns, warts,
              alopecia, premature greying of hair, varicose veins
            </AccordionItem>

            <AccordionItem id="resp" title="Respiratory Diseases" activeId={activeId} setActiveId={setActiveId}>
              Cough, cold, flu, asthma, bronchitis, sinusitis, nasal polyp, allergic rhinitis
            </AccordionItem>

            <AccordionItem id="musculoskeletal" title="Musculoskeletal Disorders" activeId={activeId} setActiveId={setActiveId}>
              Joint pain, arthritis, back pain, gout, spondylitis
            </AccordionItem>

            <AccordionItem id="kidney" title="Kidney Disorders" activeId={activeId} setActiveId={setActiveId}>
              Kidney stones, UTI, bed wetting
            </AccordionItem>

            <AccordionItem id="chronic" title="Chronic Diseases" activeId={activeId} setActiveId={setActiveId}>
              Diabetes, BP, Thyroid
            </AccordionItem>

            <AccordionItem id="women" title="Women’s Health" activeId={activeId} setActiveId={setActiveId}>
              PCOD, menstrual disorders, fibroid, leucorrhoea, infertility
            </AccordionItem>

            <AccordionItem id="neuro" title="Neurological Disorders" activeId={activeId} setActiveId={setActiveId}>
              Migraine, epilepsy, stroke recovery
            </AccordionItem>

            <AccordionItem id="pediatric" title="Pediatric Care" activeId={activeId} setActiveId={setActiveId}>
              Fever, allergies, nutrition & growth concerns
            </AccordionItem>

            <AccordionItem id="gastric" title="Gastric Disorders" activeId={activeId} setActiveId={setActiveId}>
              Acidity, constipation, diarrhoea, IBS, piles, fissures, fistula
            </AccordionItem>

            <AccordionItem id="haematology" title="Haematology" activeId={activeId} setActiveId={setActiveId}>
              Anemia
            </AccordionItem>

            <AccordionItem id="infectious" title="Infectious Diseases" activeId={activeId} setActiveId={setActiveId}>
              Dengue, typhoid, malaria, food poisoning
            </AccordionItem>

            <AccordionItem id="mental" title="Mental Disorders" activeId={activeId} setActiveId={setActiveId}>
              Anxiety, depression, OCD
            </AccordionItem>
          </div>

          {/* Right column: Aesthetic */}
          <div className="treatment-block">
            <h3 className="subheading">Aesthetic Treatment</h3>
            <p className="instrument-sans-custom">
              Advanced skin & hair treatments designed for rejuvenation and care.
            </p>

            <AccordionItem id="carbon" title="Carbon Peel" activeId={activeId} setActiveId={setActiveId} />
            <AccordionItem id="tattoo" title="Tattoo Removal" activeId={activeId} setActiveId={setActiveId} />
            <AccordionItem id="hydra" title="Hydra Facial" activeId={activeId} setActiveId={setActiveId} />
            <AccordionItem id="tan" title="Sun Tan Removal" activeId={activeId} setActiveId={setActiveId} />
            <AccordionItem id="medi" title="Medi Facial" activeId={activeId} setActiveId={setActiveId} />
            <AccordionItem id="melasma" title="Melasma Treatment" activeId={activeId} setActiveId={setActiveId} />
            <AccordionItem id="whitening" title="Skin Whitening" activeId={activeId} setActiveId={setActiveId} />
            <AccordionItem id="tightening" title="Skin Tightening" activeId={activeId} setActiveId={setActiveId} />
            <AccordionItem id="rejuvenation" title="Skin Rejuvenation" activeId={activeId} setActiveId={setActiveId} />
            <AccordionItem id="acne" title="Acne / Pimples Treatment" activeId={activeId} setActiveId={setActiveId} />
            <AccordionItem id="hair" title="Hair PRP / GFC" activeId={activeId} setActiveId={setActiveId} />
          </div>
        </div>
      </div>
    </section>
  );
}
