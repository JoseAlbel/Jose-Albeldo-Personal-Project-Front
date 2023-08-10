import { SyntheticEvent } from "react";
import { UseCars } from "../../hooks/use.cars";
import { Car } from "../../models/cars";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../../core/store";
import { useSelector } from "react-redux";
import style from "./carFormEdit.module.scss";

export default function EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cars } = useSelector((state: RootState) => state.cars);
  const { handleEditCar } = UseCars();
  const { handleDelete } = UseCars();

  const car: Car = cars.find((item: Car) => item.id === id) as Car;

  const handleEditForm = async (event: SyntheticEvent) => {
    event.preventDefault();

    const formRegisterElement: HTMLFormElement =
      event.target as HTMLFormElement;

    const data: Partial<Car> = {
      id: car.id,
      carModel: (
        formRegisterElement.elements.namedItem("carModel") as HTMLFormElement
      ).value,
      brand: (
        formRegisterElement.elements.namedItem("brand") as HTMLFormElement
      ).value,
      country: (
        formRegisterElement.elements.namedItem("country") as HTMLFormElement
      ).value,
      typeCar: (
        formRegisterElement.elements.namedItem("typeCar") as HTMLFormElement
      ).value,
    };

    await handleEditCar(data);
    navigate("/home");
  };

  return (
    <>
      <div className={style.carformeditcontainer}>
        <form id="form" onSubmit={handleEditForm}>
          <label htmlFor="carModel">MODEL</label>

          <input
            id="carModel"
            type="text"
            defaultValue={car.carModel}
            name="carModel"
          ></input>
          <label htmlFor="brand">brand</label>

          <input type="text" defaultValue={car.brand} name="brand"></input>
          <label htmlFor="country">country</label>

          <input type="text" defaultValue={car.country} name="country"></input>
          <label htmlFor="typeCar">typeCar</label>
          <select name="typeCar" id="typeCar">
            <option value="Historic">Historic</option>
            <option value="TvMovie">TvMovie</option>
            <option value="RareCar">RareCar</option>
          </select>
          <button
            onClick={() => {
              handleDelete(id as string);
              navigate("/home");
            }}
          >
            Delete
          </button>
          <button type="submit">SEND</button>
        </form>
      </div>
    </>
  );
}
