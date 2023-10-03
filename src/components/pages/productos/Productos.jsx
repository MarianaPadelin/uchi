import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Productos.css"
import { productos } from "../../../routes/productos";


export const Productos = () => {
  return (
    <div className="productos">
      <h1>Acá va la lista de productos</h1>
      {productos.map(({ id, title, path }) => (
        <Button key={id} href={path}>
          {title}
        </Button>
      ))}

      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
}
