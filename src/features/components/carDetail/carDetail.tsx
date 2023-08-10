import { useNavigate, useParams } from "react-router-dom";
import { UseCars } from "../../hooks/use.cars";
import { Car } from "../../models/cars";
import style from "./carDetail.module.scss";

export default function CarDetail() {
  const { id } = useParams();
  const { cars } = UseCars();
  const navigate = useNavigate();

  const item: Car = cars.find((item) => item.id === id) as Car;

  return (
    <>
      <div className={style.detailcar}>
        <div>
          <ul className={style.listcard}>
            <li>{<img src={item.image.url} alt={item.carModel} />}</li>
          </ul>
        </div>
        <div className={style.spec}>
          <p>{item.typeCar}</p>
          <p>{item.country}</p>
          <p>{item.brand}</p>
          <p>{item.carModel}</p>
        </div>
        <div className={style.buttonposition}>
          <button
            className={style.buttonedit}
            onClick={() => navigate("/editform/" + item.id)}
          >
            EDIT
          </button>
        </div>
      </div>
    </>
  );
}
