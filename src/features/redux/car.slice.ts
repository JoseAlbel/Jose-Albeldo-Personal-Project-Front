import { Car } from "../models/cars";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CarRepository } from "../../core/services/car.repository";

export type CarsState = {
  cars: Car[];
  carData: Partial<Car>;
  token?: string;
};

const initialState: CarsState = {
  cars: [],
  token: "",
  carData: {} as Partial<Car>,
};

export const loadCarsAsync = createAsyncThunk(
  "cars/load",
  async (repo: CarRepository) => {
    const response = await repo.getAll();
    return response;
  }
);

export const registerCarAsync = createAsyncThunk<
  Car,
  { repo: CarRepository; car: Car }
>("cars/register", async ({ repo, car }) => {
  return await repo.create(car);
});

export const editCarAsync = createAsyncThunk<
  Car,
  { repo: CarRepository; car: Partial<Car> }
>("cars/edit", async ({ repo, car }) => {
  return await repo.create(car);
});

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadCarsAsync.fulfilled, (state, { payload }) => ({
      ...state,
      cars: payload,
    }));
  },
});

export default carsSlice.reducer;
