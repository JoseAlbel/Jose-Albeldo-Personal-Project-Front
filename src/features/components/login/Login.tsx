import { useNavigate } from "react-router-dom";
import { useUsers } from "../../hooks/use.users";
import { SyntheticEvent } from "react";
import { User } from "../../models/user";
import style from "./Login.module.scss";

export default function Login() {
  const { handleLoginUser } = useUsers();
  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const element = event.target as HTMLFormElement;
    const inputs = element.querySelectorAll("input");
    const loggedUser = {
      user: inputs[0].value,
      passwd: inputs[1].value,
    } as Partial<User>;
    handleLoginUser(loggedUser);
    element.reset();
    navigate("/list");
  };

  return (
    <>
      <div className={style.logincontainer}>
        <form onSubmit={handleSubmit}>
          <h2>LOGIN</h2>

          <div>
            <label htmlFor="user">User</label>
            <input type="text" id="user" name="user" required />
          </div>
          <div>
            <label htmlFor="passwd">Password</label>
            <input type="passwd" id="passwd" name="passwd" required />
          </div>
          <div>
            <button role="button" aria-selected="true" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
