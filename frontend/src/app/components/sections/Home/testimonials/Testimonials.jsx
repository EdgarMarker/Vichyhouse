import style from "./Testimonials.module.scss";

const Testimonials = () => {
  const cn = (...className) => className.join(" ");
  return (
    <section className={style.testy}>
      <div className={style.testyInner}>
        <div className={style.testyInner__left}>
          <h3 className={cn("h3__brown")}>Testimonios</h3>
          <h2 className={cn("h2__2xl")}>Qué opinan nuestros clientes</h2>
        </div>
        <div className={style.testyInner__right}>
          <ul className={style.ul}>
            <li>
              <div className={style.card}>
                <div className={style.card__head}>
                  <h4>Hola</h4>
                </div>
                <div className={style.card__body}>
                  <p>lorem</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
