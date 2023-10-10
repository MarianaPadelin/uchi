import { AboutDesktop } from "./AboutDesktop";
import { AboutCelular } from "./AboutCelular";


export const About = () => {
  return (
    <div className="about">
      <div className="titulos">
        <h1>Sobre uchi</h1>
        <p>
          En UCHI enfatizamos la idea de encontrar belleza en nuestro ambiente
          cotidiano rodeándonos de elementos perdurables y a su vez únicos.
          Diseñados y confeccionados con el compromiso de que en cada una de
          nuestras piezas se vean reflejados el diseño, la sustentabilidad, las
          materias primas naturales y el sello único del trabajo artesanal.
        </p>
      </div>

      {window.innerWidth > 700 ? <AboutDesktop /> : <AboutCelular />}

      
    </div>
  );
}
