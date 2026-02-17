import { companyLogos } from "../constants";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const CompanyLogos = ({ className }) => {
  const scrollRef = useRef(null);
  const logoContainerRef = useRef(null);

  useEffect(() => {
    if (!logoContainerRef.current) return;

    const container = logoContainerRef.current;
    const scrollWidth = container.scrollWidth;
    const parentWidth = container.parentElement.offsetWidth;

    // Clone logos for seamless loop
    const logos = Array.from(container.children);
    logos.forEach((logo) => {
      const clone = logo.cloneNode(true);
      container.appendChild(clone);
    });

    // Create continuous scroll animation
    gsap.to(container, {
      x: -scrollWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
      onRepeat: () => {
        gsap.set(container, { x: 0 });
      },
    });

    // Pause on hover
    container.addEventListener("mouseenter", () => {
      gsap.to(container, { duration: 0.5, timeScale: 0, overwrite: "auto" });
    });

    container.addEventListener("mouseleave", () => {
      gsap.to(container, { duration: 0.5, timeScale: 1, overwrite: "auto" });
    });

    return () => {
      container.removeEventListener("mouseenter", () => {});
      container.removeEventListener("mouseleave", () => {});
      gsap.killTweensOf(container);
    };
  }, []);

  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Our Achievements
      </h5>
      <div ref={scrollRef} className="overflow-hidden">
        <ul
          ref={logoContainerRef}
          className="flex"
        >
          {companyLogos.map(( index) => (
            <li
              className="flex items-center justify-center flex-shrink-0 h-[8.5rem] min-w-[10rem]"
              key={index}
            >
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyLogos;
