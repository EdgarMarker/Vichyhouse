import { gsap, useGSAP } from "@/lib/gsap/gsap";

export { useGSAP };

export const horizontalSlideServices = ({ servicesRef }) => {
  const slider = document.getElementById("servicesSlider");
  const getScrollAmount = () => {
    let slideWidth = slider.offsetWidth;
    return -(slideWidth - window.innerWidth);
  };

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: servicesRef.current,
      start: "center 50%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      scrub: true,
      pinSpacing: true,
      pinReparent: true,
    },
  });

  tl.to(slider, {
    x: getScrollAmount,
    ease: "none",
  });
};
