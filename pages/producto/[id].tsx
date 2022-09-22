import appContext from "../../util/context";
import Image from "next/image";
import css from "./ProductoItem.module.scss";
import Button from "../../component/Button";
import { useState } from "react";

const Producto = ({ item }: any) => {
  const [img, setImg] = useState(0);
  async function handleSubmit(e: any) {
    e.preventDefault();
    const data: any = {};
    Array.from(e.currentTarget.elements).forEach((field: any) => {
      if (!field.name) return;
      data[field.name] = field.value;
    });

    await fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(data),
    });

    item.link ? (window.location.href = item.link) : undefined;
  }

  return (
    <div className={css.page}>
      <div className={css.galeria}>
        <div>
          <Image
            src={item.fotos[img]}
            layout="responsive"
            width={200}
            height={200}
          />
        </div>
        <div className="flex items-center gap-2">
          {item.fotos.map((i: any, index: any) => {
            return (
              <img
                src={i}
                width={80}
                height={100}
                onClick={() => setImg(index)}
              />
            );
          })}
        </div>
      </div>
      <div className={css.info}>
        <div className={css.nombre}>{item.nombre}</div>
        <div className={css.precio}>${item.precio}</div>
        <div className={css.descripcion}>{item.descripcion}</div>
        <div className={css.pagos}>
          Medio de pago por mercado pago, los envios se hacen de forma gratuita
          en zona centrica de capital de Jujuy o zonas aledaneas
        </div>
        <div className={css.separador}></div>
        <form className={css.form} method="post" onSubmit={handleSubmit}>
          <div className="text-lg text-gray-400">Ingrese sus datos</div>
          <input
            className={css.input}
            type="text"
            name="nombre"
            placeholder="Nombre"
          />
          <input
            className={css.input}
            type="text"
            name="correo"
            placeholder="Correo"
          />
          <input
            className={css.input}
            type="text"
            name="telefono"
            placeholder="telefono"
          />
          <input
            className="hidden"
            type="text"
            name="producto"
            defaultValue={`${item.uid}: ${item.nombre}`}
          />
          <Button type="submit">Comprar este Producto</Button>
        </form>
      </div>
    </div>
  );
};

export default Producto;

export async function getServerSideProps({ query }: any) {
  const data = await appContext.getEntry(query.id);
  const fields: any = data.fields;
  const item: any = {
    ...fields,
    uid: data.sys.id,
    fotos:
      fields.fotos
        ?.filter((y: any) => y !== undefined)
        .map((y: any) => `https:${y.fields?.file?.url}`) ?? [],
  };
  return { props: { item } };
}
