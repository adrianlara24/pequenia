import Image from "next/image";
import css from "./Producto.module.scss";

const Producto = ({ data }: any) => {
  console.log(data);

  return (
    <div className={css.producto}>
      <div className={css.fotos}>
        <Image
          src={"https:" + data.fotos[0]}
          layout="responsive"
          width={200}
          height={200}
        />
      </div>
      <div className={css.contenido}>
        <div className={css.nombre}> {data.nombre} </div>
        <div className={css.precio}> ${data.precio} </div>
      </div>
      <a className={css.link} href={data.link} target="_blank">
        Comprar
      </a>
    </div>
  );
};

export default Producto;
