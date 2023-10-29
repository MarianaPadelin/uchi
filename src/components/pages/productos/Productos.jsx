import {
  Chip,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import "./Productos.css";
import { Link } from "react-router-dom";

export const Productos = ({ items }) => {
  return (
    <div className="productos">
      <div className="titulos">
        <h1 className="tituloParrafo">Nuestros productos</h1>
        <p>
          Confeccionamos nuestros productos de manera artesanal con materias
          primas naturales de origen local. Nos apasiona el diseño, el uso de
          productos naturales y la perdurabilidad de las piezas.
        </p>
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
      <ImageList className="listadoFotos" cols={3}>
        {items.map(({ id, img1, title }) => (
          <ImageListItem key={id}>
            <img
              className="fotoProducto"
              src={img1}
              alt={title}
              loading="lazy"
            />
            <ImageListItemBar
              className="barraInfo"
              title={
                <Chip
                  style={{
                    backgroundColor: "#f6f7f4",
                    opacity: "100%",
                    borderRadius: "20px",
                    fontSize: "20px",
                    color: "#3a3a3a",
                  }}
                  label={title}
                />
              }
              actionIcon={
                <Link to={`/detalleProducto/${id}`}>
                  <Chip
                    style={{
                      backgroundColor: "#f6f6f4",
                      opacity: "70%",
                      borderRadius: "20px",
                      marginRight: "16px",
                      fontSize: "18px",
                      textDecoration: "underline",
                    }}
                    label="Ver"
                  ></Chip>
                </Link>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Link className="link" to="/productos">
        Ver todos
      </Link>
      <a href="#top" style={{textDecoration:"none"}}>
        <button className="botonera2">Volver arriba</button>
      </a>
    </div>
  );
};
