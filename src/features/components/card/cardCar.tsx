import { Car } from "../../models/cars";
import { Link } from "react-router-dom";
import style from "./carCard.module.scss";

type PropsType = {
  car: Car;
};

export function CardCars({ car }: PropsType) {
  return (
    <Link to={"/detail/" + car.id}>
      <div className={style.cardcontainer}>
        <li className={style.cardcar} key={car.id}>
          <img
            className={style.carimage}
            src={car.image?.url}
            alt="car.carModel"
          />
          <div className={style.cardata}>
            <p> {car.carModel} </p>
            <p> {car.brand} </p>
          </div>
        </li>
      </div>
    </Link>
  );
}
