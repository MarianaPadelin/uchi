import { ImageList, ImageListItem } from "@mui/material";
import { Link } from "react-router-dom";

export const ImagenesDesktop = ({ seleccionado }) => {
  //no abre la foto en grande
  return (
    <div className="detalle">
      <div
        className="link1"
        style={{ marginLeft: "48px", marginTop: "98px", marginBottom: "0px" }}
      >
        <Link style={{ color: "black" }} to="/productos">
          Todos los productos
        </Link>
      </div>
      <div className="titulos" style={{ marginTop: "0" }}>
        <h1 className="tituloParrafo">{seleccionado.title}</h1>
        <p>{seleccionado.descripcion}</p>
      </div>
      <ImageList
        sx={{ width: 800, marginBottom: "0" }}
        variant="quilted"
        cols={6}
        gap={24}
        rowHeight={121}
      >
        <ImageListItem cols={3} rows={4}>
          <img
            className="imagenDetalle"
            src={seleccionado.img1}
            alt={seleccionado.title}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem cols={3} rows={2}>
          <img
            style={{ marginBottom: "24px" }}
            className="imagenDetalle"
            src={seleccionado.img2}
            alt={seleccionado.title}
            loading="lazy"
          />
          <ImageListItem cols={3} rows={2}>
            <img
              style={{ marginTop: "1vh" }}
              className="imagenDetalle"
              src={seleccionado.img3}
              alt={seleccionado.title}
              loading="lazy"
            />
          </ImageListItem>
        </ImageListItem>
      </ImageList>
      {seleccionado.especificaciones && (
      <div className="titulos" style={{ marginBottom: "40px" }}>
        <p>{seleccionado.especificaciones}</p>
      </div>
      )}
      {seleccionado.medidas ? (
        <div className="datosProducto">
          <h2 className="titulo3">Datos del producto</h2>
          <span style={{ display: "flex", gap: "40px" }}>
            <p>{seleccionado.medidas}</p>

            <Link
              to={seleccionado.enlace}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <button className="botonera">Comprar</button>
            </Link>
          </span>
        </div>
      ) : (
        <div className="soloBotonComprar">
          <Link
            to={seleccionado.enlace}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <button className="botonera">Comprar</button>
          </Link>
        </div>
      )}
      {seleccionado.li1 && (
        <div className="cuidados">
          <h2 className="tituloParrafo">Cuidados del producto</h2>
          <ul>
            {seleccionado.li1 && <li>{seleccionado.li1}</li>}
            {seleccionado.li2 && <li>{seleccionado.li2}</li>}
            {seleccionado.li3 && <li>{seleccionado.li3}</li>}
            {seleccionado.li4 && <li>{seleccionado.li4}</li>}
            {seleccionado.li5 && <li>{seleccionado.li5}</li>}
            {seleccionado.li6 && <li>{seleccionado.li6}</li>}
          </ul>
        </div>
      )}
      <Link
        style={{ marginBottom: "128px", textDecoration: "none" }}
        to={`/productos/${seleccionado.categoria}`}
      >
        <button className="botonera2">Ver más {seleccionado.categoria}</button>
      </Link>
      {seleccionado.video1 && (
        <div className="videos">
          <iframe
            width="400"
            height="300"
            src={seleccionado.video1}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <iframe
            width="400"
            height="300"
            src={seleccionado.video2}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      )}
    </div>
  );
};
