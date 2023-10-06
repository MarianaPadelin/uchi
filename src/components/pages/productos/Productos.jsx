import {Button, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import "./Productos.css"
import { Link } from "react-router-dom";


export const Productos = ({items}) => {
  return (
    <div className="productos">
      <div className="titulos">
        <h1>Nuestros productos</h1>
        <p>Párrafo descriptivo</p>
      </div>

      <div className="categorias">
        <Link className="link" to="/productos/suribachi">
          Suribachis
        </Link>
        <Link className="link" to="/productos/chawan">
          Chawan
        </Link>
        <Link className="link" to="/productos/hangiri">
          Hangiri
        </Link>
        <Link className="link" to="/productos/accesorios">
          Accesorios
        </Link>
      </div>
      <ImageList className="listadoFotos" cols={3} gap={10}>
        {items.map(({ id, img1, title }) => (
          <ImageListItem key={id}>
            <img
              src={`${img1}?w=164&h=164&fit=crop&auto=format`}
              alt={title}
              loading="lazy"
              style={{ borderRadius: "3vw" }}
            />
            <ImageListItemBar
              style={{ borderRadius: "3vw", background: "none" }}
              title={title}
              actionIcon={
                <Link to={`/detalleProducto/${id}`}>
                  <Button variant="text" style={{ color: "#f4f4f4" }}>
                    Ver
                  </Button>
                </Link>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Link className="link" to="/productos">
        Ver todos
      </Link>
    </div>
  );
}
