import style from "./Approach.module.scss";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/app/services/home.services";

const Approach = ({ data }) => {
  const cn = (...className) => className.join(" ");
  return (
    <section className={style.approach}>
      <div className={style.approachInner}>
        <div className={style.approachInner__left}>
          <h3 className={cn("h3__brown")}>
            {data.homeApproach?.homeApproachTextH3}
          </h3>
          <h2 className={cn("h2__2xl")}>
            {data.homeApproach.homeApproachTextH2}
          </h2>
        </div>
        <div className={style.approachInner__right}>
          <PortableText value={data.homeApproach.homeApproachTextP} />
        </div>
      </div>
      <img
        src={urlFor(data.homeApproach.homeApproachImg.media).url()}
        alt={data.homeApproach.homeApproachImg.asset.altText}
      />
    </section>
  );
};

export default Approach;
