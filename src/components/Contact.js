import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhone,
  faLocationDot,
  faEnvelope,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagramSquare,
  faFacebookSquare,
  faSquareXTwitter
} from '@fortawesome/free-brands-svg-icons';
import "../css/Section.css";

library.add(faPhone, faEnvelope, faLocationDot, faClock, faInstagramSquare, faFacebookSquare, faSquareXTwitter);


export default function Contact() {
  return (
    <section id="contact" className="rounded-2xl shadow-md p-6 compartment">
      <h2 className="text-2xl font-semibold mb-6 heading">Contact Us</h2>

      <div className="contact-container">
        {/* Text Content */}
        <div className="contact-details">
          <h3 className="text-xl font-semibold mb-4 heading">Get in Touch</h3>
          <ul className="instrument-sans-custom text-gray-800 space-y-2 mb-4" style={{ listStyle: "none" }}>
            <li>
              <FontAwesomeIcon icon={faPhone} style={{color: "#a49a5f", marginRight: "10px"}} />
              +91-9876543210
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} style={{color: "#a49a5f", marginRight: "10px"}} />
              contact@morphosisclinic.com
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} style={{color: "#a49a5f", marginRight: "10px"}} />
              123 Health Street, Wellness City, India
            </li>
            <li>
              <FontAwesomeIcon icon={faClock} style={{color: "#a49a5f", marginRight: "10px"}} />
              Mon-Fri: 9am - 6pm
            </li>
          </ul>
          <a href="https://www.instagram.com/morphosisclinic/" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FontAwesomeIcon icon={faInstagramSquare} style={{ color: "#a49a5f" }} className="socialMediaIcon" />
          </a>
          <a href="https://www.facebook.com/morphosisclinic/" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FontAwesomeIcon icon={faFacebookSquare} style={{ color: "#a49a5f" }} className="socialMediaIcon" />
          </a>
          <a href="https://www.twitter.com/morphosisclinic/" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FontAwesomeIcon icon={faSquareXTwitter} style={{ color: "#a49a5f" }} className="socialMediaIcon" />
          </a>
        </div>
        <div className="map-container">
          <iframe
            title="Morphosis Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.1941714229556!2d77.41529167517346!3d23.308712778974296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6928e055f4c5%3A0x13c6bf4e7f76ae34!2sMorphosis%20Clinic%20-%20Homoeopathy%20%7C%20Aesthetics%20%7C%20Skin%2C%20Hair%20%26%20Laser!5e0!3m2!1sen!2sin!4v1753385019885!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <p className="contact-footer">&copy; {new Date().getFullYear()} Our Clinic. All rights reserved.</p>
    </section>
  );
}

