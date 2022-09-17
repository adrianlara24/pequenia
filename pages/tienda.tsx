import { NextPage } from "next";
import * as contentful from "contentful";
import Producto from "../component/Producto";

var client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE as string,
  accessToken: process.env.CONTENTFUL_TOKEN as string,
});

const Tienda: NextPage = ({ items }: any) => {
  return (
    <>
      {items.map((item: any) => {
        return <Producto key={item.nombre} data={item}></Producto>;
      })}
    </>
  );
};

export default Tienda;

export async function getStaticProps() {
  const result = await client.getEntries("producto");
  const data = result.items.map((x) => x.fields) as any[];

  const items = data.map((x) => ({
    ...x,
    fotos: x.fotos.map((y: any) => y.fields.file.url),
  }));

  return {
    props: {
      items,
    },
  };
}
