"use client";
import { useGSAP } from "@gsap/react";
import {
  gsap,
  ScrollTrigger,
  ScrollToPlugin,
  ScrollSmoother,
  CustomEase,
} from "gsap/all";

gsap.registerPlugin(
  CustomEase,
  ScrollToPlugin,
  ScrollTrigger,
  ScrollSmoother,
  useGSAP,
);

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;
const RECIPROCAL_GR = 1 / GOLDEN_RATIO;
const DURATION = RECIPROCAL_GR;
const EASE = CustomEase.create("ease", "0.175, 0.885, 0.32, 1");


gsap.config({
  autoSleep: 60,
  nullTargetWarn: false,
});


gsap.defaults({
  duration: DURATION,
  ease: EASE,
});

export {
  CustomEase,
  DURATION,
  EASE,
  GOLDEN_RATIO,
  gsap,
  ScrollTrigger,
  ScrollSmoother,
  useGSAP,
};