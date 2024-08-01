import { gsap, useGSAP } from "@/lib/gsap/gsap";

export { useGSAP };

export const horizontalSlideServices = () => {
  const slider = document.getElementById("servicesSlider");
  const getScrollAmount = () => {
    let slideWidth = slider.offsetWidth;
    return -(slideWidth - window.innerWidth);
  };

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#services",
      start: "center 50%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      scrub: true,
    },
  });

  tl.to(slider, {
    x: getScrollAmount,
    ease: "none",
  });
};
