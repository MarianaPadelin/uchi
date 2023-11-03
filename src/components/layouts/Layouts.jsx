import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbarcompleto from "./navbar/Navbarcompleto";
import NavbarCelular from "./navbar/NavbarCelular";

const Layouts = () => {
  return (
    <>
      {window.innerWidth > 768 ? <Navbarcompleto /> : <NavbarCelular />}
      
      <Outlet />
      <Footer />
    </>
  );
};

export default Layouts;
