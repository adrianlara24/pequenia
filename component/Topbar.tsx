import Link from "next/link";
import css from "./Topbar.module.scss";

const Topbar = () => {
  return (
    <div className={css.topbar}>
      <div className={css.header}>
        <img className={css.logo} src="logo.jpg" alt="Logo" />
        <h2 className={css.titulo}>Mi Pequeña Belen</h2>
      </div>
      <div className={css.links}>
        <Link href="/">Inicio</Link>
        <Link href="/tienda">Tienda</Link>
      </div>
    </div>
  );
};

export default Topbar;
