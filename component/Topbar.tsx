import Link from "next/link";
import css from "./Topbar.module.scss";

const Topbar = () => {
  return (
    <div className={css.topbar}>
      <div className={css.header}>
        <img className={css.logo} src="/logo.png" alt="Logo" />
        <h2 className={css.titulo}>Mi Pequeña Belen</h2>
      </div>
      <span className={css.build}>PAGINA EN CONSTRUCCION</span>
      <div className={css.links}>
        <Link href="/">
          <a className={css.link}>Inicio</a>
        </Link>
        <Link href="/tienda">
          <a className={css.link}>Tienda</a>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
