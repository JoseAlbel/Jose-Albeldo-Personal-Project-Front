import { Car } from "../models/cars";
import { User } from "../models/user";

export type ApiAnswer = {
  items: Car[];
};

export type LoginResponse = {
  token: string;
  user: Partial<User>;
};
