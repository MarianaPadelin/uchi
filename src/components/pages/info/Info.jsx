import { Link } from "react-router-dom";
import "./Info.css";

export const Info = () => {
  return (
    <div className="info">
      <div className="titulos">
        <h1 className="tituloParrafo">Información</h1>
        <p>
          Contamos con diferentes métodos de envío, retiro y compra para que
          puedas elegir el que te resulte más conveniente.
        </p>
      </div>

      <div className="parrafoInfo">
        <h1 className="titulo2">Compra directa de Suribachi</h1>
        <p>
          Contamos con dos puntos de venta en la Ciudad de Buenos Aires donde
          podes comprar nuestros Suribachis.
        </p>
        <div className="parrafoColumnas">
          <p style={{ fontSize: "18px" }}>
            <u>PALERMO:</u> Restaurant Harakiri.
            <br /> Honduras 4756.
            <br /> Martes a Viernes de 19 a 24 hs.
            <br />
            Sábados y Domingos: 13 a 16 hs.
          </p>
          <p style={{ fontSize: "18px" }}>
            <u>BELGRANO:</u> Sanzaru <br />
            Juramento 2527, Local 35.
            <br />
            Lunes a Sábado de 12 a 18 hs
          </p>
        </div>
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
          Hacemos envíos a todo el país. 
          <br />Dependiendo el método elegido y la
          distancia los montos pueden variar. 
          <br />El cotizador de la página funciona
          correctamente. 
          <br />Si tenés alguna duda podés consultarnos por whatsapp,
          correo electrónico o telefónicamente
        </p>
      </div>
    </div>
  );
};
