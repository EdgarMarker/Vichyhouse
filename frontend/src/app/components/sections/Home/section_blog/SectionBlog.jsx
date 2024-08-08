"use client";

import style from "./SectionBlog.module.scss";
import sectionBlogDb from "./SectionBlog.db.json";
import { urlFor } from "@/app/services/home.services";
import { PortableText } from "@portabletext/react";
import { useEffect, useRef } from "react";
import { register } from 'swiper/element/bundle';

register();

const SectionBlog = ({ dataBlog }) => {
  const cn = (...className) => className.join(" ");
  const data = dataBlog.homeBlog;

  const limitedArticlesPart1 = data.homeBlogArticle.slice(0, 1);
  const limitedArticlesPart2 = data.homeBlogArticle.slice(2, 3);
  const limitedArticlesPart3 = data.homeBlogArticle.slice(4, 5);

  const swiperElRef = useRef(null);
  
  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <section className={style.blog}>
      <div className={style.blogInner}>
        <div className={style.blogInner__left}>
          <img
            src={urlFor(data.homeBlogImg.media).url()}
            alt={data.homeBlogImg.asset.altText}
          />
        </div>
        <div className={style.blogInner__right}>
          <h3 className={cn("h3__brown")}>{sectionBlogDb.h3}</h3>
          <h2>{data.homeBlogH2}</h2>
          <h2>{data.homeBlogH2Italic}</h2>
          <PortableText value={data.homeBlogDescription} />
          <swiper-container>
            <swiper-slide>
              {data.homeBlogArticle.map((article, idx) => (
                <div className={style.item} key={idx}>
                  <a href={article.articleLink}>
                    <h2>{article.articleName}</h2>
                  </a>
                  <PortableText value={article.articleDescription} />
                  <a className={style.btn} href={article.articleLink}>
                    Seguir leyendo
                  </a>
                </div>
              ))}
            </swiper-slide>
            <swiper-slide>
              {data.homeBlogArticle.map((article, idx) => (
                <div className={style.item} key={idx}>
                  <a href={article.articleLink}>
                    <h2>{article.articleName}</h2>
                  </a>
                  <PortableText value={article.articleDescription} />
                  <a className={style.btn} href={article.articleLink}>
                    Seguir leyendo
                  </a>
                </div>
              ))}
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </section>
  );
};

export default SectionBlog;
