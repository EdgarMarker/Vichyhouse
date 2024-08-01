import style from "./Divisor.module.scss";

const Divisor = () => {
  const cn = (...className) => className.join(" ");
  return (
    <section className={style.divisor}>
      <h2 className={cn("h2__xl")}>Proyectos que se</h2>
      <h2 className={cn("h2__xl")}>adaptan a ti</h2>
      <div>
        <img src="/svg/nav_logo.svg" alt="imagen_divisor" />
      </div>
    </section>
  );
};

export default Divisor;
