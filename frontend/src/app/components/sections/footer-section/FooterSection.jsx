import style from "./FooterSection.module.scss";

const FooterSection = () => {
  return (
    <section className={style.footer}>
      <h2 className="h2__2xl">Contactar a un asesor</h2>
      <div className={style.footerInner}></div>
    </section>
  );
};

export default FooterSection;
