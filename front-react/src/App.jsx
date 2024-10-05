import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/login/Register";
import { UserImbox } from "./pages/user/UserImbox";
import { UserPosts } from "./pages/user/UserPosts";
import { UserProfile } from "./pages/user/UserProfile";
import { ProductDetails } from "./pages/product/ProductDetails";
import { Deporte } from "./pages/product/categories/Deporte";
import { Hogar } from "./pages/product/categories/Hogar";
import { Tecnologia } from "./pages/product/categories/Tecnologia";
import { Estudio } from "./pages/product/categories/Estudio";
import { Moda } from "./pages/product/categories/Moda";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/UserImbox" element={<UserImbox />}></Route>
          <Route path="/UserPosts" element={<UserPosts />}></Route>
          <Route path="/UserProfile" element={<UserProfile />}></Route>
          <Route path="/ProductDetails" element={<ProductDetails />}></Route>
          <Route path="/Deporte" element={<Deporte />}></Route>
          <Route path="/Hogar" element={<Hogar />}></Route>
          <Route path="/Tecnologia" element={<Tecnologia />}></Route>
          <Route path="/Estudio" element={<Estudio />}></Route>
          <Route path="/Moda" element={<Moda />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
