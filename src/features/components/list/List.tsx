import { useEffect } from "react";
import { UseCars } from "../../hooks/use.cars";
import { CardCars } from "../card/cardCar";
import style from "./List.module.scss";
import { useNavigate } from "react-router-dom";

export default function List() {
  const { cars, handleLoadCars } = UseCars();
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/home");
  };

  const handleAddForm = () => {
    navigate("/addform");
  };

  const handleLogOut = () => {
    navigate("/");
  };

  useEffect(() => {
    handleLoadCars();
  }, [handleLoadCars]);

  return (
    <>
      <div className={style.listcontainer}>
        <div className={style.buttonplace}>
          <button className={style.form_button} onClick={handleNavigateHome}>
            HOME
          </button>

          <button className={style.form_button} onClick={handleAddForm}>
            ADDCAR
          </button>
          <button className={style.form_button} onClick={handleLogOut}>
            LOGOUT
          </button>
        </div>
        <div className={style.listcard}>
          <ul>
            {cars.map((car) => (
              <CardCars car={car}></CardCars>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
