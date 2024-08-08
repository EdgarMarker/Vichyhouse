"use client";

import style from "./HomeServices.module.scss";
import { horizontalSlideServices, useGSAP } from "./HomeServices.gsap";
import { PortableText } from "@portabletext/react";
import { useRef } from "react";

const HomeServices = ({data}) => {
  const cn = (...className) => className.join(" ");
  const servicesRef = useRef(null);

  useGSAP(() => {
    horizontalSlideServices({servicesRef});
  }, []);

  return (
    <section className={style.services} id="services" ref={servicesRef}>
      <div className={style.servicesInner} id="servicesSlider">
        {data.homeServices.map((item, idx) => (
          <div className={style.servicesInner__item} key={idx}>
            <div>
              <h3 className={cn("h3__gold")}>Servicios</h3>
              <h2 className={cn("h2__xl", style.servicesInner__h2)}>{item.homeServicesH2}</h2>
            </div>
            <PortableText value={item.homeServicesP}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
