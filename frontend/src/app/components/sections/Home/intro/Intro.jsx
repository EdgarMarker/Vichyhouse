import introDb from "./Intro.db.json";
import style from "./Intro.module.scss";

const Intro = ({ data }) => {
  const cn = (...className) => className.join(" ");

  return (
    <section className={style.intro}>
      <>
        <div className={style.introInner}>
          <img src="/svg/nav_logo.svg" alt="logo_intro" />
          <h1>{data.homeIntro.homeIntroTitleH1}</h1>
          <h2 className={cn(style.h2, "h2__2xl")}>
            <span className={cn("h2__2xl", style.introInner__h2Span)}>
              {data.homeIntro.homeIntroSubtitleH2Underline}
            </span>
            {data.homeIntro.homeIntroSubtitleH2}
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
      </>
    </section>
  );
};

export default Intro;
