"use client";

import style from "./SectionBlog.module.scss";
import sectionBlogDb from "./SectionBlog.db.json";
import { urlFor } from "@/app/services/home.services";
import { PortableText } from "@portabletext/react";
import { useEffect, useRef, useState } from "react";

const SectionBlog = ({ dataBlog }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInnerRef = useRef(null);
  const totalSlides = Math.ceil(dataBlog.homeBlog.homeBlogArticle.length / 2);

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const slideInner = slideInnerRef.current;
    const slideItemWidth = slideInner.clientWidth;
    slideInner.style.transform = `translateX(-${currentSlide * slideItemWidth}px)`;
  }, [currentSlide]);

  const cn = (...className) => className.join(" ");
  const data = dataBlog.homeBlog;

  const limitedArticlesPart1 = data.homeBlogArticle.slice(0, 2);
  const limitedArticlesPart2 = data.homeBlogArticle.slice(2, 4);

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
          <div className={cn("slides-containerBlog", style.slideContainer)}>
            <div
              ref={slideInnerRef}
              className={cn("slide-innerBlog", style.slideInner)}
            >
              <div className={style.slideItem}>
                {[...limitedArticlesPart1].map((article, idx) => (
                  <div className={cn("slideBlog", style.slideBlog)} key={idx}>
                    <a href={article.articleLink}>
                      <h2>{article.articleName}</h2>
                    </a>
                    <PortableText value={article.articleDescription} />
                    <a className={style.btn} href={article.articleLink}>
                      Seguir leyendo
                    </a>
                  </div>
                ))}
              </div>
              <div className={style.slideItem}>
                {limitedArticlesPart2.map((article, idx) => (
                  <div className={cn("slideBlog", style.slideBlog)} key={idx}>
                    <a href={article.articleLink}>
                      <h2>{article.articleName}</h2>
                    </a>
                    <PortableText value={article.articleDescription} />
                    <a className={style.btn} href={article.articleLink}>
                      Seguir leyendo
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={style.navigationButtons}>
            <button onClick={handlePrev} disabled={currentSlide === 0}>
              <img src="/svg/arrow_icon.svg" alt="arrow_icon" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentSlide === totalSlides - 1}
            >
              <img src="/svg/arrow_icon.svg" alt="arrow_icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBlog;
