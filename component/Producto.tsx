import Link from "next/link";
import Image from "next/image";
import css from "./Producto.module.scss";

const Producto = ({ data }: any) => {
  const id = encodeURIComponent(data.uid);
  return (
    <Link href={`/producto/${id}`} className={css.producto}>
      <div className={css.fotos}>
        <Image
          src={data.fotos[0]}
          layout="responsive"
          width={200}
          height={200}
        />
        <div className={css.nombre}> {data.nombre} </div>
      </div>
      {/* <div className={css.contenido}>
        <div className={css.nombre}> {data.nombre} </div>
        <div className={css.precio}> ${data.precio} </div>
      </div>
      <a className={css.link} href={data.link} target="_blank">
        Comprar
      </a> */}
    </Link>
  );
};

export default Producto;
