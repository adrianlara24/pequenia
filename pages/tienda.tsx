import { NextPage } from "next";
import appContext from "../util/context";
import css from "./tienda.module.scss";
import Producto from "../component/Producto";

const Tienda: NextPage = ({ items }: any) => {
  return (
    <div className={css.tienda}>
      <div className={css.productos}>
        {items.map((item: any, index: any) => (
          <Producto key={index} data={item}></Producto>
        ))}
      </div>
    </div>
  );
};

export default Tienda;

export async function getServerSideProps() {
  const result = await appContext.getEntries("producto");
  const data = result.items.map((x) => ({
    ...(x.fields as any),
    uid: x.sys.id,
  })) as any[];
  const items = data.map((x) => ({
    ...x,
    fotos:
      x.fotos
        ?.filter((y: any) => y !== undefined)
        .map((y: any) => `https:${y.fields?.file?.url}`) ?? [],
  }));

  return {
    props: { items },
  };
}
