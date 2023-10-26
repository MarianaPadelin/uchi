import { AboutDesktop } from "./AboutDesktop";
import { AboutCelular } from "./AboutCelular";


export const About = () => {
  return (
    <div className="about">
      <div className="titulos">
        <h1 className="tituloParrafo">Sobre uchi</h1>
        <p>
          UCHI es una palabra japonesa que se usa para nombrar a la propia casa.
          Tiene una connotación de hogar y representa el espacio propio. Su
          kanji -ideograma- (家) se incluye en la lengua japonesa en palabras
          como kazoku (家族), que significa familia o kagu (家具), mobiliario.
          Remite a la valorización de lo propio, de lo compartido y a la
          tradición que cada familia transmite generación tras generación.
        </p>
      </div>

      {window.innerWidth > 700 ? <AboutDesktop /> : <AboutCelular />}
    </div>
  );
}
