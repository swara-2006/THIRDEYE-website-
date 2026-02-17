import { companyLogos } from "../constants";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const CompanyLogos = ({ className }) => {
  const trackRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return undefined;

    const tween = gsap.to(trackRef.current, {
      xPercent: -50,
      duration: 15,
      ease: "none",
      repeat: -1,
    });

    const handleEnter = () => tween.pause();
    const handleLeave = () => tween.resume();

    const track = trackRef.current;
    track.addEventListener("mouseenter", handleEnter);
    track.addEventListener("mouseleave", handleLeave);

    return () => {
      track.removeEventListener("mouseenter", handleEnter);
      track.removeEventListener("mouseleave", handleLeave);
      tween.kill();
    };
  }, []);

  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Our Achievements
      </h5>
      <div className="overflow-hidden">
        <ul ref={trackRef} className="flex w-max gap-8 whitespace-nowrap">
          {[...companyLogos, ...companyLogos].map((logo, index) => (
            <li
              className="flex items-center justify-center h-[3rem]"
              key={index}
            >
              <span className="h5 text-n-1/70">{logo}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyLogos;
