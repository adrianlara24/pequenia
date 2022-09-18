import appContext from "../../util/context";

const Producto = ({ item }: any) => {
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
    <>
      <div>Producto {item.nombre} </div>
      <form method="post" onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" />
        <input type="text" name="correo" placeholder="Correo" />
        <input type="text" name="telefono" placeholder="telefono" />
        <input
          className="hidden"
          type="text"
          name="producto"
          defaultValue={`${item.uid}: ${item.nombre}`}
        />
        <button type="submit">Comprar</button>
      </form>
    </>
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
