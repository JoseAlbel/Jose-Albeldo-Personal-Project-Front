// import { useSelector } from "react-redux";
// import { RootState } from "../../../core/store/store";
// import { useUsers } from "../../hooks/use.users";
import style from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={style.homecontainer} id="homecontainer">
        <div className={style.imagecontainer}>
          <div>
            <p>
              We have 100+ collections of cars from big names such as Mercedes
              Benz, Ferrari, BMW, Shelby, TV cars and special cars, etc. We will
              give the exclusive data and best information you can get and great
              quality “Bilita mpash”.
            </p>

            <p>
              Let’s find one{" "}
              <a className={style.golist} href="/list">
                HERE
              </a>
              .
            </p>
          </div>
          <img
            className={style.imageshelby}
            src="./homeCar.jpg"
            alt="shelby car"
          />
        </div>
        <div>
          <p className={style.lema}>
            In the Bantu language set (spoken in central and southern Africa),
            bilita mpash means "a wonderful dream".{" "}
            <a className={style.register} href="/register">
              create your account here
            </a>{" "}
            and get started.
          </p>
          <div className={style.whyus}>
            <img
              className={style.imagedessertcar}
              src="./whyuscar.jpg"
              alt="dessert cars"
            />
            <h2>WHY US</h2>
            <p>
              On this website you will find everything that you will not find in
              others. And of course, nobody is going to treat the information
              with as much affection and perfection as we do. Since it is your
              Bilita mpash, that is the most important thing of all.
            </p>
            <p>
              Our workers are the most professional and specialist in the
              automotive world, so you will have an experience never seen
              before. They themselves are the first passionate and dreamers in
              the wonderful world of automobiles.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
