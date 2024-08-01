"use client";
import { ScrollSmoother, ScrollTrigger, useGSAP, gsap } from "@/lib/gsap/gsap";

const ScrollSmotherProvider = ({children}) => {
  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1000px)", () => {
      ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
      });
    });
    mm.add("(max-width: 767px)", () => {});

    ScrollTrigger.addEventListener("refresh", function () {
      if (document.body.getAttribute("style") === "") {
        document.body.removeAttribute("style");
      }
    });
  }, []);
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default ScrollSmotherProvider;
