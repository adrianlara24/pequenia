import { NextPage } from "next";
import * as contentful from "contentful";
import css from "./tienda.module.scss";
import Producto from "../component/Producto";

var client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE as string,
  accessToken: process.env.CONTENTFUL_TOKEN as string,
});

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
  const result = await client.getEntries("producto");
  const data = result.items.map((x) => x.fields) as any[];
  const items = data.map((x) => ({
    ...x,
    fotos: x.fotos?.map((y: any) => y.fields?.file?.url) ?? [],
  }));

  return {
    props: {
      items: [
        ...items,
        // ...items,
        // ...items,
        // ...items,
        // ...items,
        // ...items,
        // ...items,
      ],
    },
  };
}
