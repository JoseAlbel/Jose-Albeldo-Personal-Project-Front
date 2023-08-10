import { Link } from "react-router-dom";
import style from "./Header.module.scss";

type Propstype = {
  title: string;
  subtitle: string;
};

export function Header({ subtitle }: Propstype) {
  return (
    <>
      <header className={style.header} id="header">
        <div>
          <Link to="/">
            <img
              className={style.logo}
              src="./TituloBilita.png"
              alt="logo name bilita"
            />
          </Link>
          <h2>{subtitle}</h2>
        </div>

        <Link to="/login">
          <button className={style.buttonlogin}>Login</button>
        </Link>
      </header>
    </>
  );
}
