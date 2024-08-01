"use client";

import style from "./Services.module.scss";
import servicesDb from "./Services.db.json";
import { horizontalSlideServices, useGSAP } from "./Services.gsap";

const Services = () => {
  const cn = (...className) => className.join(" ");

  useGSAP(() => {
    horizontalSlideServices();
  }, []);

  return (
    <section className={style.services} id="services">
      <div className={style.servicesInner} id="servicesSlider">
        {servicesDb.item.map((item, idx) => (
          <div className={style.servicesInner__item} key={idx}>
            <div>
              <h3 className={cn("h3__gold")}>{item.h3}</h3>
              <h2 className={cn("h2__xl", style.servicesInner__h2)}>{item.h2}</h2>
            </div>
            <p>{item.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
