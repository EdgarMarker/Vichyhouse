"use client";
import { useGSAP } from "@/lib/gsap/gsap";
import style from "./Nav.module.scss";
import { navButton, navLoader, gsap } from "./Nav.gsap";
import { useState } from "react";
import navDb from "./Nav.db.json";

const Nav = () => {
  const [isActiveToggle, setIsActiveToggle] = useState(false);

  useGSAP(() => {
    navLoader();
    if (isActiveToggle) {
      gsap.to("#navToggleDisplay > div", {
        height: "auto",
        opacity: 1,
        duration: 0.5,
      });
    } else {
      gsap.to("#navToggleDisplay > div", {
        height: 0,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setIsActiveToggle(false);
        },
      });
    }
  }, [isActiveToggle]);

  const handleClick = () => {
    navButton();
    setIsActiveToggle(!isActiveToggle);
  };

  return (
    <>
      <nav className={style.nav} id="nav">
        <div className={style.nav__inner}>
          <a href="/" className={style.inner__logo}>
            <img src="/svg/nav_logo.svg" alt="nav_logo" />
          </a>
        </div>
        <div className={style.nav__toggleMenu} onClick={handleClick}>
          <img src="/svg/menu_icon.svg" alt="svg_menu_icon" />
        </div>
        <div className={style.nav__toggleDisplay} id="navToggleDisplay">
          <div className={style.nav__toggleDisplayInner}>
            {isActiveToggle && (
              <ul>
                {navDb.links.map((item) => (
                  <li key={item.id}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
