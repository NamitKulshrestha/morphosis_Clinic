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
    },
    {
      name: "Dr. Yashasvi",
      image: YashasviImage,
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
                <p className="instrument-sans-custom">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit
                  quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat.
                  Vitae pellentesque sem placerat in id cursus mi.
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
