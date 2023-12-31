import { SyntheticEvent } from "react";
import { useUsers } from "../../hooks/use.users";
import { User } from "../../models/user";
import { useNavigate } from "react-router-dom";
import style from "./Register.module.scss";

export default function Register() {
  const { handleRegisterUser } = useUsers();
  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const data = {
      userName: (formElement.elements.namedItem("user") as HTMLInputElement)
        .value,
      email: (formElement.elements.namedItem("email") as HTMLInputElement)
        .value,
      passwd: (formElement.elements.namedItem("passwd") as HTMLInputElement)
        .value,
    } as unknown as Partial<User>;
    handleRegisterUser(data);
    formElement.reset();
    navigate("/login");
  };

  return (
    <>
      <div className={style.registercontainer}>
        <form onSubmit={handleSubmit}>
          <h2>Get registered</h2>
          <div>
            <label htmlFor="user">User Name: </label>
            <input type="text" id="user" name="user" />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="passwd">Password: </label>
            <input type="password" id="passwd" name="passwd" role="textbox" />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}
