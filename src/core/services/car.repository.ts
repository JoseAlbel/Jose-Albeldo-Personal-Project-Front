import { Car } from "../../features/models/cars";
import { ApiRepository } from "./api.repository";

type ApiResponse = {
  items: Car[];
};
export class CarRepository extends ApiRepository<Car> {
  constructor(public url: string, public token: string) {
    super(url, token);
  }

  async getAll(): Promise<Car[]> {
    const response = await fetch(`${this.url}/`);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }
    const data = (await response.json()) as ApiResponse;
    return data.items;
  }
  async getCar(_id: Car["id"]): Promise<Car> {
    const response = await fetch(`${this.url}/id`);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }
    const data = (await response.json()) as Car;
    return data;
  }

  async createCar(item: FormData): Promise<Car> {
    const response = await fetch(`${this.url}/`, {
      method: "POST",
      body: item,
      headers: { Authorization: "Bearer " + this.token },
    });
    return response.json() as Promise<Car>;
  }
  async deleteById(id: Car["id"]) {
    const url = `${this.url}/${id}`;
    const resp = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
  }
}
