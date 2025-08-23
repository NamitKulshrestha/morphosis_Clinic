// // components/FadeInSection.js
// import React from "react";
// import { motion } from "framer-motion";

// export default function FadeInSection({ children }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9, y: 60 }}
//       whileInView={{ opacity: 1, scale: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       viewport={{ once: true }}
//     >
//       {children}
//     </motion.div>
//   );
// }

import React, { useRef, useEffect, useState } from "react";
import "../src/css/FullPageScroll.css"; // to use fade-section styles

export default function FadeInSection({ children }) {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-section ${isVisible ? "active" : ""}`}
    >
      {children}
    </div>
  );
}
