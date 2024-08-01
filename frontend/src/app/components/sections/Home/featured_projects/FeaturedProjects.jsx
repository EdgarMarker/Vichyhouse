import style from "./FeaturedProjects.module.scss";
import featuredDb from "./FeaturedProjects.db.json";

const FeaturedProjects = () => {
  const cn = (...className) => className.join(" ");
  return (
    <section className={style.featured}>
      <div className={style.featuredInner}>
        <h3 className={cn("h3__brown")}>{featuredDb.h3}</h3>
        <h2 className={cn("h2__2xl")}>{featuredDb.h2}</h2>
        <ul className={style.featuredInner__ul}>
          <li>
            <img src="" alt="" />
            text
          </li>
          <li>
            <img src="" alt="" />
            text
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FeaturedProjects;
