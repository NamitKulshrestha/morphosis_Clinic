import React from "react";
import YashasviImage from "../images/yashasvi.png";
import MansiImage from "../images/mansi.png";
import "../css/Section.css";

export default function Doctors() {
  // Associate each doctor with their specific image
  const doctors = [
    {
      name: "Dr. Mansi",
      image: MansiImage,
      about: "Dr. Mansi Choubey is a compassionate and dedicated healthcare professional, committed to providing personalized care to every patient. With specialized training in cosmetology and trichology, she offers a wide range of advanced treatments for skin and hair concerns. Her expertise covers all types of skin rejuvenation, acne care, scar management, pigmentation solutions, hair restoration, and PRP therapies. Along with aesthetic care, she also focuses on women’s health issues, ensuring holistic wellness for her patients.Driven by her passion for patient satisfaction and visible results, Dr. Mansi blends medical knowledge with the latest technology to deliver safe, effective, and tailored treatments."
    },
    {
      name: "Dr. Yashasvi",
      image: YashasviImage,
      about: "Dr. Yashasvi is a highly skilled and experienced dermatologist, known for his expertise in treating a wide range of skin conditions. He is dedicated to helping his patients achieve healthy, beautiful skin through personalized treatment plans and the latest advancements in dermatology."
    },
  ];

  return (
    <div id="doctors" className="compartment">
      <div className="doctors-flex">

        {/* Cards on the left */}
        <div className="doctors-cards">
          {doctors.map((doctor, index) => (
            <div className="card" key={index}>
              <img
                src={doctor.image}
                className="card-img-top"
                alt={doctor.name}
              />
              <div className="card-body">
                <h5 className="heading">{doctor.name}</h5>
                <p className="instrument-sans-custom" style={{ textAlign: "justify" }}>
                  {doctor.about}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Heading on the right */}
        <div className="doctors-heading">
          <h2 className="heading">Our Doctors</h2>
        </div>

      </div>
    </div>
  );
}
