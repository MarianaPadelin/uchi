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
        <h1>Nuestros productos</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum
          curabitur vitae nunc sed velit dignissim.
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
                      marginRight: "4px",
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
    </div>
  );
};
