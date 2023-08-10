import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../models/user";
import { UserRepository } from "../../core/services/user.repository";
import { CarRepository } from "../../core/services/car.repository";
import { Car } from "../models/cars";

export const registerUserAsync = createAsyncThunk<
  User,
  { repo: UserRepository; user: Partial<User> }
>("/register", async ({ repo, user }) => {
  return await repo.register(user);
});

export const loginUserAsync = createAsyncThunk<
  Partial<User>,
  { repo: UserRepository; user: Partial<User> }
>("/login", async ({ repo, user }) => {
  const result = await repo.login(user);
  console.log({ result });
  return result;
});

export const createCarAsync = createAsyncThunk<
  Car,
  { repo: CarRepository; car: FormData }
>("/add", async ({ repo, car }) => {
  return await repo.createCar(car);
});

export const deleteCarAsync = createAsyncThunk<
  string,
  { id: string; repo: CarRepository },
  { rejectValue: string }
>("cars/delete", async ({ id, repo }, thunkAPI) => {
  try {
    if (!id) {
      throw new Error("Invalid ID");
    }
    await repo.deleteById(id);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue("bad Id");
  }
});
