import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbarcompleto from "./navbar/Navbarcompleto";

const Layouts = () => {
  return (
    <>
      <Navbarcompleto />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layouts;
