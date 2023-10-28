import { Link } from "react-router-dom";

export const ImagenesCelular = ({ seleccionado }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        className="link1"
        style={{ marginLeft: "48px", marginTop: "98px", marginBottom: "0px" }}
      >
        <Link style={{ color: "black" }} to="/productos">
          Volver a la colección
        </Link>
      </div>
      <div className="titulos" style={{ marginTop: "0" }}>
        <h1 className="tituloParrafo">{seleccionado.title}</h1>
        <p>{seleccionado.descripcion}</p>
      </div>
      <img className="imagenesCelu" src={seleccionado.img1}></img>
      <img className="imagenesCelu" src={seleccionado.img2}></img>
      <img className="imagenesCelu" src={seleccionado.img3}></img>

      <div className="titulos">
        <p>{seleccionado.especificaciones}</p>
      </div>
      <div className="titulos">
        <h2>Datos del producto</h2>
        <p>{seleccionado.medidas}</p>

        <button href={seleccionado.enlace} className="botonera" target="_blank">
          Comprar
        </button>
      </div>

      <div className="cuidados">
        <h2 className="tituloParrafo">Cuidados del producto</h2>
        <ul>
          {seleccionado.li1 && <li>{seleccionado.li1}</li>}
          {seleccionado.li2 && <li>{seleccionado.li2}</li>}
          {seleccionado.li3 && <li>{seleccionado.li3}</li>}
          {seleccionado.li4 && <li>{seleccionado.li4}</li>}
          {seleccionado.li5 && <li>{seleccionado.li5}</li>}
          {seleccionado.li6 && <li>{seleccionado.li6}</li>}
          {seleccionado.li7 && <li>{seleccionado.li7}</li>}
          {seleccionado.li8 && <li>{seleccionado.li8}</li>}
        </ul>
      </div>
      <button
        className="botonera2"
        href={`/productos/${seleccionado.categoria}`}
      >
        Ver más {seleccionado.categoria}
      </button>

      {seleccionado.video1 && (
        <div className="videos">
          <iframe
            width="300"
            height="200"
            src={seleccionado.video1}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <iframe
            width="300"
            height="200"
            src={seleccionado.video2}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      )}
    </div>
  );
};
