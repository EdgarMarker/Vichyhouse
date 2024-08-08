import style from "./FooterSection.module.scss";
import footerDb from "./FooterSection.db.json";
import FooterForm from "./FooterForm";

const FooterSection = () => {
  return (
    <section className={style.footer}>
      <h2 className="h2__2xl">Contactar a un asesor</h2>
      <div className={style.footerInner}>
        <h3 className="h3__gold">Contacto</h3>
        <div className={style.footerInner__contact}>
          <div className={style.contact__left}>
            {footerDb.contact.map((item, idx) => (
              <div key={idx}>
                <h3>{item.h3}</h3>
                <a href="" target="_blank">
                  {item.name}
                </a>
              </div>
            ))}
          </div>
          <div className={style.contact__right}>
            <FooterForm />
          </div>
        </div>
        <div className={style.footerInner__list}>
          <ul>
            {footerDb.list.map((item, idx) => (
              <li key={idx}>
                <h4>{item.h4}</h4>
                {item.a.map((item, idx) => (
                  <a href="" target="_blank" key={idx}>
                    {item.name}
                  </a>
                ))}
              </li>
            ))}
          </ul>
          <img src="/svg/nav_logo.svg" alt="vichy_logo" />
        </div>
        <p>
          VICHY HOUSES © Todos los derechos reservados | Sitio web creado por{" "}
          <a href="https://marker.com.mx/">MARKER branding</a>
        </p>
      </div>
    </section>
  );
};

export default FooterSection;
