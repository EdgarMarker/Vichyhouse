import { gsap, useGSAP } from "@/lib/gsap/gsap";

export { useGSAP };

export const slideHero = () => {
  const tl = gsap.timeline();

  tl.to("#heroInner > div:nth-child(2)", {
    y: 0,
    opacity: 1,
    delay: 0.8,
  });
  tl.to("#heroInner > div:nth-child(3)", {
    y: 0,
    opacity: 1,
  });
};
