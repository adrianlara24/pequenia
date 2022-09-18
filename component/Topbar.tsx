import Link from "next/link";
import css from "./Topbar.module.scss";

const Topbar = () => {
  return (
    <div>
      <div>
        <Link href='/'>Inicio</Link>
        <Link href='/tienda'>Tienda</Link>
      </div>
    </div>
  );
};

export default Topbar;
