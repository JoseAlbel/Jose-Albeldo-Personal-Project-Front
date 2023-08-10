import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CarRepository } from "../../core/services/car.repository";
import { AppDispatch, RootState } from "../../core/store";
import { createCarAsync, deleteCarAsync } from "../redux/thunks";
import { editCarAsync, loadCarsAsync } from "../redux/car.slice";
import { Car } from "../models/cars";

export function UseCars() {
  const { cars } = useSelector((state: RootState) => state.cars);
  const { token } = useSelector((state: RootState) => state.users);
  const dispatch: AppDispatch = useDispatch();
  const url = "http://localhost:2200/cars";

  const repo: CarRepository = useMemo(
    () => new CarRepository(url, token as string),
    [token]
  );

  const handleLoadCars = useCallback(async () => {
    dispatch(loadCarsAsync(repo));
  }, [repo, dispatch]);

  const handleCreateCar = async (car: FormData) => {
    dispatch(createCarAsync({ repo, car }));
  };

  const handleEditCar = async (car: Partial<Car>) => {
    dispatch(editCarAsync({ repo, car }));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteCarAsync({ id, repo: repo }));
  };

  return {
    handleLoadCars,
    handleEditCar,
    handleDelete,
    handleCreateCar,
    cars,
    url,
    repo,
  };
}
