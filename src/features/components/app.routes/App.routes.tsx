import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import CarAddForm from "../carformAdd/carFormAdd";
const Register = lazy(() => import("../register/Register"));
const Login = lazy(() => import("../login/Login"));
const List = lazy(() => import("../list/List"));
const Home = lazy(() => import("../home/Home"));
const CarDetail = lazy(() => import("../carDetail/carDetail"));
const EditForm = lazy(() => import("../carFormEdit/carFormEdit"));
const WishList = lazy(() => import("../wishList/wishList"));
const ErrorPage = lazy(() => import("../error.page/error.page"));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/list" element={<List></List>}></Route>
        <Route path="/detail/:id" element={<CarDetail></CarDetail>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/addform" element={<CarAddForm></CarAddForm>}></Route>
        <Route path="/editform/:id" element={<EditForm></EditForm>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/wishList" element={<WishList></WishList>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Suspense>
  );
}
