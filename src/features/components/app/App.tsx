import { AppRoutes } from "../app.routes/App.routes";
import { Footer } from "../footer/footer";
import { Header } from "../header/Header";
import "./App.scss";

export function App() {
  return (
    <>
      <Header title="Cars" subtitle=""></Header>
      <main>
        <AppRoutes></AppRoutes>
      </main>
      <Footer></Footer>
    </>
  );
}
