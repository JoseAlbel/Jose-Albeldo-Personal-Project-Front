import { useNavigate } from "react-router-dom";
import { UseCars } from "../../hooks/use.cars";
import { SyntheticEvent } from "react";
import style from "./carFormAdd.module.scss";

export default function CarAddForm() {
  const navigate = useNavigate();
  const { handleCreateCar } = UseCars();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const carForm = event.target as HTMLFormElement;
    const carData = new FormData(carForm);
    console.log(carData);

    handleCreateCar(carData);
    navigate("/home");
  };
  return (
    <div className={style.carformcontainer}>
      <form role="form" id="form" onSubmit={handleSubmit}>
        <label htmlFor="carModel">MODEL</label>
        <input type="text" id="carModel" name="carModel"></input>
        <label htmlFor="brand">BRAND</label>
        <input type="text" id="brand" name="brand"></input>
        <label htmlFor="country">COUNTRY</label>
        <input type="text" id="country" name="country"></input>

        <select name="typeCar" id="typeCar">
          <option value="Historic">Historic</option>
          <option value="TvMovie">TvMovie</option>
          <option value="RareCar">RareCar</option>
        </select>
        <input type="file" name="image"></input>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
