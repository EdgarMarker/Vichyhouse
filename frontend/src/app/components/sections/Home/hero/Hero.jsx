"use client";

import style from "./Hero.module.scss";
import { slideHero, useGSAP, splitText } from "./Hero.gsap";
import { urlFor } from "@/app/services/home.services";
import { useRef } from "react";

const Hero = ({ data }) => {
  const heroRef = useRef();

  useGSAP(() => {
    slideHero();
  }, [heroRef]);

  return (
    <section className={style.hero} ref={heroRef}>
        <div className={style.heroInner} id="heroInner">
          {data.homeHeroSomosExpertos.map((item, idx) => (
            <div className={style.heroInner__item} key={idx}>
              <div className={style.info}>
                <h3>Somos Expertos en:</h3>
                <h2>{splitText(item.title)}</h2>
              </div>
              <div className={style.images}>
                {item.gallery.map((img, idx) => (
                  <img
                    src={urlFor(img.img.url).url()}
                    alt="somos_expertos_img"
                    key={idx}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Hero;
