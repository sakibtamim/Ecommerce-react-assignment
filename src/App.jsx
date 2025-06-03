import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Contactpage from "./pages/Contactpage";
import Layouts from "./components/Layouts";
import { Cube } from "react-preloaders";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layouts />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contactpage />}></Route>
    </Route>
  )
);

function App() {
  let [loading, setLoading] = useState(true);
  document.body.style.overflow = loading ? "hidden" : "auto";
  setTimeout(() => {
    setLoading(false);
    document.body.style.overflow = "auto";
  }, 1000);

  return (
    <>
      {loading == true ? (
        <Cube />
      ) : (
        <>
          <RouterProvider router={router} />
        </>
      )}
    </>
  );
}

export default App;
