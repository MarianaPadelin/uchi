import { useState } from "react";
import { TextoEscondido } from "./TextoEscondido";

export const AboutCelular = () => {
 const [mostrarTexto, setMostrarTexto] = useState(false);
 const toggleButton = () => {
  if(mostrarTexto == false){
    setMostrarTexto(true)
  } else setMostrarTexto(false)
 }
 
 
 
   // const toggleButton = ()=>{

  //   <TextoEscondido />
  // }
  return (
    <div className="aboutCelu">
      <img
        className="imagenesCelu"
        src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1698606900/uchi/about/M_Sobre_Uchi-2_vcnwa7.jpg"
      ></img>

      <div className="aboutDetalle">
        <p>
          En UCHI creemos en la idea de que este espacio propio debe ser
          habitado por objetos perdurables que con los cuidados adecuados,
          puedan formar parte de cada hogar por generaciones. La belleza se
          reflejará, de esta manera, doblemente: en el objeto en sí y en el
          efecto que produce el paso del tiempo. Creemos que el entorno natural,
          las materias primas y la producción deben ser inseparables. Destacamos
          la importancia de rodearnos de objetos de fabricación local que
          manifiesten su belleza en su esencia natural.
        </p>
        <img
          className="imagenesCelu"
          src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1698606904/uchi/about/M_Sobre_Uchi-1_opoj89.jpg"
        ></img>
        <p>
          “Detrás de cada objeto hay un cierto clima, un cierto rango de
          temperaturas, una calidad de suelo determinada y otras muchas
          condiciones físicas. Contemplar su belleza es contemplar el trabajo
          espontáneo de la naturaleza.” (Yanagi Sōetsu, 1926)
        </p>
        <p>
          Nuestra producción es de baja escala. Si bien algunos procesos se
          realizan de forma estandarizada, cada una de nuestras piezas se
          tornea, cuela y esmalta una por una, llevando la impronta del
          artesano.
        </p>
      </div>

      <img
        className="imagenesCelu"
        src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1698606899/uchi/about/M_Sobre_Uchi-3_zrntp1.jpg"
      ></img>

      <div className="aboutDetalle" >
        <button className="btn" onClick={toggleButton}>
          <h1 className="titulo2" id="tituloAle">
            Sobre Alejandra Hanashiro
            <img src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1699041433/uchi/iconos/boto%CC%81n_sobre_alejandra_c1vxjk.png"></img>
          </h1>
          {mostrarTexto ? <TextoEscondido /> : null}
        </button>
      </div>

      <div className="divDeBotones">
        <button className="botonera">Ver mi currículum</button>
        <button className="botonera2">Ver mi portfolio</button>
      </div>
    </div>
  );
}
