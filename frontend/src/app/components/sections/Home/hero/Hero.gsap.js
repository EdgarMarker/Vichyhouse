import { gsap, useGSAP } from "@/lib/gsap/gsap";

export { useGSAP };

export const slideHero = () => {
  const animateChars = (selector) => {
    return gsap.to(`${selector} .charHero`, {
      scale: 1,
      opacity: 1,
      stagger: 0.05,
      duration: 1,
    });
  };
  const tl = gsap.timeline({
    defaults: {
      y: 0,
      opacity: 1,
      duration: 1.5,
    },
  });
  tl.to("#heroInner > div:nth-child(1)", {
    onStart: () => {
      animateChars("#heroInner > div:nth-child(1)");
      gsap.to("#heroInner > div:nth-child(1) img:nth-child(2)", {
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });
    },
    onComplete: () => {
      gsap.to("#heroInner > div:nth-child(1)", {
        opacity: 0,
      });
    },
  });
  tl.to("#heroInner > div:nth-child(2)", {
    onStart: () => {
      animateChars("#heroInner > div:nth-child(2)");
      gsap.to("#heroInner > div:nth-child(2) img:nth-child(2)", {
        y: 0,
        duration: 1,
        delay: 1,
        ease: "power2.out",
      });
    },
    onComplete: () => {
      gsap.to("#heroInner > div:nth-child(2)", {
        opacity: 0,
      });
    },
  });
  tl.to("#heroInner > div:nth-child(3)", {
    onStart: () => {
      animateChars("#heroInner > div:nth-child(3)");
      gsap.to("#heroInner > div:nth-child(3) img:nth-child(2)", {
        y: 0,
        duration: 1.5,
        delay: 1.25,
        ease: "power2.out",
      });
    },
  });
};

export const splitText = (text) => {
  if (!text) {
    return null;
  }
  return text.split(" ").map((word, index) => (
    <div
      className="word"
      style={{ display: "flex", whiteSpace: "nowrap" }}
      key={index}
    >
      {word.split("").map((letter, letterIndex) => (
        <div className="charHero" key={letterIndex}>
          {letter}
        </div>
      ))}
      &nbsp;
    </div>
  ));
};
