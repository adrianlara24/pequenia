import type { NextPage } from "next";
import Link from "next/link";
import css from "../styles/Home.module.scss";
import Button from "../component/Button";

const Home: NextPage = () => {
  return (
    <div className={css.home}>
      <div className={css.home_title}>Mi Pequeña Belen</div>
      <p className={css.home_intro}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        molestias culpa autem magnam suscipit! Perferendis, laborum temporibus
        corporis id recusandae voluptates aut earum similique, quas nostrum
        distinctio! Maxime, porro vel?
      </p>
      <Link href="/tienda">
        <a>
          <Button>Ver Tienda!!</Button>
        </a>
      </Link>
    </div>
  );
};

export default Home;
