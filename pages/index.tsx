import type { NextPage } from "next";
import Link from "next/link";
import css from "../styles/Home.module.scss";
import Button from "../component/Button";

const Home: NextPage = () => {
  return (
    <div className={css.page}>
      <div className={css.home}>
        <div className={css.home_title}>Mi Pequeña Belen</div>
        <p className={css.home_intro}>Nunca dejes de imaginar</p>
        <Link href="/tienda">
          <a>
            <Button>Ver Tienda!!</Button>
          </a>
        </Link>
      </div>
      <div className={css.home_historia}>
        <h3>Un Poco de Historia</h3>
        <p>
          Hace 18 años cenábamos en familia cuando llegó mi hermana más chica,
          Nadia Belén, quien en ese entonces estaba en segundo grado de
          primaria. Había salido de compras con mi madre, y emocionada se
          dispuso a abrir las bolsas y desenvolver los paquetes para enseñarnos
          lo que traía consigo. Un pantalón jardinero, una remera blanca para
          gimnasia, zapatos negros para el colegio, y un gorro de lana naranja
          con el que de inmediato cubrió su cabeza. El gorro intentaba imitar
          las facciones de un gato, le habían puesto ojos, pequeñas orejas y
          unos bigotes largos hechos con tanza retorcida. Nai, como llamamos a
          mi hermana, estaba feliz con su gorro, y comenzó a bailar intentando
          hacer los pasos que le enseñaban en clases de danza. Y la niña comenzó
          a saltar y a girar con los brazos extendidos, dejando que su largo
          cabello negro se moviera como una capa en su espalda. La imagen de mi
          pequeña hermana bailando con ese gorro con cara de gato en la cabeza,
          quedó grabada en mi mente. Esa misma noche describí todo lo que vi, la
          describí a ella lo mejor que pude e instantáneamente, aunque aún no
          tenía ninguna historia, supe que esa imagen me serviría para darle
          vida a la protagonista de uno de ellas. Con el tiempo creé a una niña
          que amaba a los animales y los rescataba de la calle haciendo renegar
          a su madre, pues todos los días llevaba a casa uno diferente. La niña,
          demasiado pequeña para su edad, sin amigos, extremadamente curiosa y
          con un corazón enorme, bajaba por unas escaleras que conducían al
          oscuro sótano, y en una valija con olor a humedad encontraba un gorro
          de lana con cara de gato, que la miraba y le hablaba. Con el tiempo el
          sótano de su casa se convirtió en el ático de la casa de su abuela, el
          gorro de gato se convirtió en un disfraz de pájaro llamado Picoazul, y
          ese, amigos, fue exactamente la manera en que nació Mi Pequeña Belén.
          Recuerdo que por aquel entonces no había escrito nada para niños, mis
          narraciones generalmente estaban dirigidas a adolescentes y adultos,
          por eso me llevó años completar la historia. Durante todo ese tiempo
          disfruté del proceso de creación, disfruté imaginando las situaciones
          y personajes de los libros, sin embargo, jamás fui capaz de imaginar
          las satisfacciones que estos más tarde me traerían. Aún queda mucho
          por contar en relación al mundo de Mí Pequeña Belén, de hecho ese
          maravilloso y mágico mundo terminó convirtiéndose en un universo, un
          universo que sigue en expansión… Y aquí estamos.
        </p>
      </div>
    </div>
  );
};

export default Home;
