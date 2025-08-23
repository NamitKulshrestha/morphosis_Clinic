import React, { useEffect } from 'react';
import 'baguettebox.js/dist/baguetteBox.min.css';
import baguetteBox from 'baguettebox.js';
import '../css/fluid-gallery.css';
import '../css/Section.css';

import Bridge from '../images/bridge.jpg';
import Park from '../images/park.jpg';
import Tunnel from '../images/tunnel.jpg';
import Traffic from '../images/traffic.jpg';
import Coast from '../images/coast.jpg';
import Rails from '../images/rails.jpg';

export default function Gallery() {
  useEffect(() => {
    baguetteBox.run('.tz-gallery');
  }, []);

  const images = [
    { src: Bridge, alt: 'Bridge' },
    { src: Park, alt: 'Park' },
    { src: Tunnel, alt: 'Tunnel' },
    { src: Traffic, alt: 'Traffic' },
    { src: Coast, alt: 'Coast' },
    { src: Rails, alt: 'Rails' }
  ];

  return (
    <section id="gallery" className="rounded-2xl shadow-md p-6 compartment">
      <h2 className="text-2xl font-semibold mb-4 heading">Gallery</h2>
      <p className="instrument-sans-custom text-gray-700 mb-6">
        Take a look at our state-of-the-art facilities, events, and happy patients.
      </p>
      <div className="tz-gallery">
        <div className="row">
          {images.slice(0, 3).map((img, index) => (
            <div className="col-sm-6 col-md-4 mb-3" key={index}>
              <a className="lightbox" href={img.src}>
                <img src={img.src} alt={img.alt} className="img-fluid rounded shadow" />
              </a>
            </div>
          ))}

          <div className="col-md-8 mb-3">
            <a className="lightbox" href={images[3].src}>
              <img
                src={images[3].src}
                alt={images[3].alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                className="img-fluid rounded shadow"
              />
            </a>
          </div>

          <div className="col-md-4 d-flex flex-column gap-3">
            <div>
              <a className="lightbox" href={images[4].src}>
                <img src={images[4].src} alt={images[4].alt} className="img-fluid rounded shadow" />
              </a>
            </div>
            <div>
              <a className="lightbox" href={images[5].src}>
                <img src={images[5].src} alt={images[5].alt} className="img-fluid rounded shadow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
