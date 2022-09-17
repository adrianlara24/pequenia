import css from "./Producto.module.scss";

const Producto = ({ data }: any) => {
  //   {data.fotos.map((f: any, index: number) => {
  //     return <img key={index} src={f} alt="" />;
  //   })}

  console.log(data);

  return (
    <div className={css.producto}>
      <div className={css.fotos}>
        <img src={data.fotos[0]} alt="" />
      </div>
      <div className={css.nombre}> {data.nombre} </div>
      <div className={css.precio}> {data.precio} </div>
      <div className={css.descripcion}> {data.descripcion} </div>
      <a className={css.boton} href={data.link} target="_blank">
        Comprar
      </a>
    </div>
  );
};

export default Producto;
