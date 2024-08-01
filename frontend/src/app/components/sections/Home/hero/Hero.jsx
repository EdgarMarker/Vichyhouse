"use client";

import style from "./Hero.module.scss";
import { slideHero, useGSAP } from "./Hero.gsap";

const Hero = () => {
  useGSAP(() => {
    slideHero();
  }, []);

  return (
    <section className={style.hero}>
      <div className={style.heroInner} id="heroInner">
        <div className={style.heroInner__item}>
          <div>
            <h3>subtitle</h3>
            <h2>title</h2>
          </div>
          <div></div>
        </div>
        <div className={style.heroInner__item}>
          <div>
            <h3>subtitle</h3>
            <h2>title</h2>
          </div>
          <div></div>
        </div>
        <div className={style.heroInner__item}>
          <div>
            <h3>subtitle</h3>
            <h2>title</h2>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
