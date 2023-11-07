import { Link } from "react-router-dom";

export const ImagenesCelular = ({ seleccionado, scrollToTop }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link
        className="link1"
        style={{
          marginTop: "40px",
          justifyContent: "end",
          marginRight: "20px",
          marginBottom: "0px",
        }}
        to="/productos"
      >
        Todos los productos
      </Link>

      <div className="titulos">
        <h1 className="tituloParrafo" style={{ marginTop: "80px" }}>
          {seleccionado.title}
        </h1>
        <p>
          {seleccionado.descripcion}
          <br />
          {seleccionado.desc2 && seleccionado.desc2}
          <br />
          {seleccionado.desc3 && seleccionado.desc3}
          <br />
          {seleccionado.desc4 && seleccionado.desc4}
          <br />
          {seleccionado.desc4 && seleccionado.desc5}
        </p>
      </div>
      <img className="imagenesCelu" id="img2" src={seleccionado.img2}></img>
      <img className="imagenesCelu" id="img1" src={seleccionado.img1}></img>

      {seleccionado.especificaciones && (
        <div className="titulos" style={{ marginTop: "0px" }}>
          <p>
            {seleccionado.especificaciones}
            <br />
            {seleccionado.esp2 && seleccionado.esp2}
            <br />
            {seleccionado.esp3 && seleccionado.esp3}
          </p>
        </div>
      )}

      {seleccionado.medidas ? (
        <div className="datosProducto">
          <h2 className="titulo2">Datos del producto</h2>
          <p style={{ fontSize: "16px" }}>
            {seleccionado.medidas}
            <br />
            {seleccionado.medidas2 && seleccionado.medidas2}
            <br />
            {seleccionado.medidas3 && seleccionado.medidas3}
            <br />
            {seleccionado.medidas4 && seleccionado.medidas4}
          </p>

          <Link
            to={seleccionado.enlace}
            target="_blank"
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
              marginBottom: "40px",
            }}
          >
            <button className="botonera">Comprar</button>
          </Link>
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

      <img className="imagenesCelu" id="img3" src={seleccionado.img3}></img>
      {seleccionado.li1 && (
        <div className="cuidados">
          <h2 className="titulo2">Cuidados del producto</h2>
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
        onClick={scrollToTop}
        to={`/productos/${seleccionado.categoria}`}
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <button className="botonera2">Ver más {seleccionado.categoria}</button>
      </Link>

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
