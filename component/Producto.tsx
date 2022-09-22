import Link from "next/link";
import Image from "next/image";
import css from "./Producto.module.scss";

const Producto = ({ data }: any) => {
  const id = encodeURIComponent(data.uid);
  return (
    <Link href={`/producto/${id}`}>
      <a className={css.producto}>
        <Image
          src={data.fotos[0]}
          layout="responsive"
          width={200}
          height={200}
        />
        <div className={css.contenedor}>
          <div className={css.nombre}>{data.nombre}</div>
          <button className={css.btn}>Ver Detalle</button>
        </div>
      </a>
    </Link>
  );
};

export default Producto;
