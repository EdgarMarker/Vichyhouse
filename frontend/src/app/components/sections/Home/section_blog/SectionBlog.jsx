import style from "./SectionBlog.module.scss";
import sectionBlogDb from "./SectionBlog.db.json";

const SectionBlog = () => {
  const cn = (...className) => className.join(" ");
  return (
    <section className={style.blog}>
      <div className={style.blogInner}>
        <div className={style.blogInner__left}>
          <img src="/svg/nav_logo.svg" alt="" />
        </div>
        <div className={style.blogInner__right}>
          <h3 className={cn("h3__brown")}>{sectionBlogDb.h3}</h3>
          {sectionBlogDb.item.map((item, idx) => (
            <div className={style.item} key={idx}>
              <h2>{item.h2}</h2>
              <p>{item.p}</p>
              <a className={style.btn} href="">{item.btn}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionBlog;
