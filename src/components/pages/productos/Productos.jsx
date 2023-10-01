import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Productos = () => {
  const productos = [
    { id: "suribachi", name: "suribachi" },
    { id: "hangiri", name: "hangiri" },
    { id: "chawan", name: "chawan" },
  ];

  return (
    <div>
      <h1>Acá va la lista de productos</h1>
      {productos.map(({ id, name }) => (
        <Button key={id}>{name}</Button>
      ))}

      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Productos;
