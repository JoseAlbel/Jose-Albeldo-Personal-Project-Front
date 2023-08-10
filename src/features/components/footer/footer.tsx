import style from "./footer.module.scss";
// import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <footer id="footer">
        <address>
          <div className={style.footer}>
            <img
              className={style.imgdirection}
              src="ubicacion.webp"
              alt="ubicacion"
            />

            <h2 className="h2">
              <p>Bilita mpash-CARS </p>
              <p className={style.direction}>
                Avd. Del fundidor de carritos, 22 Besalú 46021 Tokio
              </p>
              <p className={style.allrights}>
                ©2023 BilitaMpashCars.com. All rights reserved
              </p>
            </h2>
          </div>
        </address>
      </footer>
    </>
  );
}
