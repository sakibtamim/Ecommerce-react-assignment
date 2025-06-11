import React, { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Contactpage from "./pages/Contactpage";
import Layouts from "./components/Layouts";
import SignUpPage from "./pages/SignUpPage";
import LogInpage from "./pages/LogInpage";
import "./App.css";
import LogInHomePage from "./pages/LogInHomePage";
import AccountPage from "./pages/AccountPage";
import AboutPage from "./pages/AboutPage";
import WishlistPage from "./pages/WishlistPage";
import Cartpage from "./pages/Cartpage";
import CheckOutPage from "./pages/CheckOutPage";
import Page404 from "./pages/Page404";
import ProductDetailsPage from "./pages/ProductDetailsPage";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layouts />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contactpage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/login" element={<LogInpage />}></Route>
      <Route path="/userloginhome" element={<LogInHomePage />}></Route>
      <Route path="/useraccount" element={<AccountPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/wishlist" element={<WishlistPage />}></Route>
      <Route path="/cart" element={<Cartpage />}></Route>
      <Route path="/checkout" element={<CheckOutPage />}></Route>
      <Route path="/404" element={<Page404 />}></Route>
      <Route path="/productdetails" element={<ProductDetailsPage />}></Route>
    </Route>
  )
);

function App() {
  let [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      {loading == true ? (
        <div className="loading"></div>
      ) : (
        <>
          <RouterProvider router={router} />
          <ScrollToTop smooth />
        </>
      )}
    </>
  );
}

export default App;
