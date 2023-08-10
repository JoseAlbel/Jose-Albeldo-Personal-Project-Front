import { User } from "./user";
import { Image } from "../types/image";

export type Car = {
  id: string;
  typeCar: "Historic" | "TvMovie" | "RareCar";
  brand: string;
  country: string;
  carModel: string;
  image: Image;
  owner: User;
};
export type CarStructure = { id: string } & Car;

export type CarServerResponse = {
  results: CarStructure[];
};
