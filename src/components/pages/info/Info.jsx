
import { Link } from "react-router-dom";
import "./Info.css";

export const Info = () => {
  return (
    <div className="info">
      <div className="titulos">
        <h1 className="tituloParrafo">Información</h1>
        <p>
          Contamos con diferentes métodos de envío, retiro y compra para que vos
          puedas elegir tu preferido.
        </p>
      </div>

      <div className="parrafoInfo">
        <h1 className="titulo2">Compra online</h1>
        <p>
          Visitá nuestra tienda online para realizar tu pedido y adquirir
          nuestros productos
        </p>
        <Link
          style={{ textDecoration: "none" }}
          to="https://www.uchi.com.ar/"
          target="_blank"
        >
          <button className="botonera">Nuestra tienda online</button>
        </Link>
      </div>

      <div className="parrafoInfo">
        <h1 className="titulo2">Retiro sin cargo</h1>
        <p>
          En caso de que quieras retirar tu pedido sin cargo de manera
          presencial, podés acordar el envío con nosotros y retirarlo dentro de
          las 48 horas posteriores a la acreditación del pago. Contamos con dos
          puntos de retiro en la Ciudad de Buenos Aires.
        </p>
        <div className="parrafoColumnas">
          <p style={{ fontSize: "18px" }}>
            <u>PALERMO:</u> Honduras 4756.
            <br /> Martes a Viernes de 19 a 24 hs.
            <br />
            Sábados y Domingos: 13 a 16 hs.
          </p>
          <p style={{ fontSize: "18px" }}>
            <u>RETIRO:</u> Paraguay 610 - Portería <br /> Lunes a viernes.
          </p>
        </div>
      </div>

      <div className="parrafoInfo">
        <h1 className="titulo2">Envíos con cargo</h1>
        <p>
          Elegí el método de envío que más te convenga, los costos dependerán de
          la distancia y la modalidad de envío que elijas
        </p>
      </div>

      <div className="parrafoInfo">
        <h1 className="titulo2">Compra directa de Suribachi</h1>
        <p>
          Podés comprar directamente nuestros Suribachis en el Restaurant
          Harakiri y el Restaurant Sanzaru
        </p>
        <div className="parrafoColumnas">
          <p style={{ fontSize: "18px" }}>
            <u>PALERMO:</u> Restaurant Harakiri. Honduras 4756.
            <br /> Martes a Viernes de 19 a 24 hs.
            <br />
            Sábados y Domingos: 13 a 16 hs.
          </p>
          <p style={{ fontSize: "18px" }}>
            <u>BELGRANO:</u> Restaurant Sanzaru <br />
            Juramento 2527, Local 35.
            <br />
            Lunes a Sábado de 12 a 18 hs
          </p>
        </div>
      </div>
    </div>
  );
};
