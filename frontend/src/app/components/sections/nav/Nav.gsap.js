import { gsap, useGSAP } from "@/lib/gsap/gsap";

export { useGSAP, gsap };

export const navLoader = () => {
  gsap.to("#nav > div", {
    opacity: 1,
    y: 0,
    stagger: 0.2,
  });
};

export const navButton = () => {
  gsap.fromTo(
    "#nav > div:nth-child(2)",
    {
      scale: 0.8,
    },
    {
      scale: 1,
    }
  );
};
