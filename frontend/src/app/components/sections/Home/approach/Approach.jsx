import style from "./Approach.module.scss";
import approachDb from "./Approach.db.json";

const Approach = () => {
    const cn = (...className) => className.join(" ")
  return (
    <section className={style.approach}>
      <div className={style.approachInner}>
        <div className={style.approachInner__left}>
          <h3 className={cn("h3__brown")}>{approachDb.h3}</h3>
          <h2 className={cn("h2__2xl")}>{approachDb.h2}</h2>
        </div>
        <div className={style.approachInner__right}>
          <p>
            Somos especialistas en Real Estate de alta gama, enfocado a
            proyectos inmobiliarios en las zonas de mayor plusvalía en la
            ciudad, y con la experiencia para respaldar tus proyectos.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco labor
          </p>
        </div>
      </div>
      <img src="/svg/nav_logo.svg" alt="approach_image" />
    </section>
  );
};

export default Approach;
