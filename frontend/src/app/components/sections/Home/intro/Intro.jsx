import introDb from "./Intro.db.json";
import style from "./Intro.module.scss";

const Intro = () => {
  const cn = (...className) => className.join(" ");
  return (
    <section className={style.intro}>
      <div className={style.introInner}>
        <img src="/svg/nav_logo.svg" alt="logo_intro" />
        <h3>{introDb.h3}</h3>
        <h2 className={cn(style.h2, "h2__2xl")}>
          <span className={cn("h2__2xl", style.introInner__h2Span)}>{introDb.h2Span}</span>
          {introDb.h2}
        </h2>
        <a href="" className={style.introInner__firstBtn}>
          {introDb.firstBtn}
        </a>
        <a href="" className={style.introInner__secondBtn}>
          {introDb.secondBtn}
        </a>
      </div>
      <>
        <img
          className={style.intro__floatImg}
          src="/svg/nav_logo.svg"
          alt="decoration_img_intro"
        />
        <img
          className={style.intro__floatImg}
          src="/svg/nav_logo.svg"
          alt="decoration_img_intro"
        />
        <img
          className={style.intro__floatImg}
          src="/svg/nav_logo.svg"
          alt="decoration_img_intro"
        />
      </>
    </section>
  );
};

export default Intro;
