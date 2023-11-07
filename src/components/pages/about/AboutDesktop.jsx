import { ImageList, ImageListItem } from "@mui/material";


export const AboutDesktop = () => {
  return (
    <div>
      <div className="imagenesDesktop">
        <ImageList
          sx={{ marginBottom: "128px" }}
          variant="quilted"
          cols={6}
          gap={24}
          rowHeight={121}
        >
          <ImageListItem cols={3} rows={4}>
            <img
              className="imagenDetalle"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696936334/uchi/about/IMG_5815_jpg_mvavfw.jpg"
              alt="uchi"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem cols={3} rows={2}>
            <img
              style={{ marginBottom: "24px" }}
              className="imagenDetalle"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696936336/uchi/about/IMG_1088_jpg_ai8zfh.jpg"
              alt="uchi"
              loading="lazy"
            />
            <ImageListItem cols={3} rows={2}>
              <img
                style={{ marginTop: "1vh" }}
                className="imagenDetalle"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696936333/uchi/about/IMG_5861_jpg_pazkkw.jpg"
                alt="uchi"
                loading="lazy"

              />
            </ImageListItem>
          </ImageListItem>
        </ImageList>
      </div>

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
      <div className="parrafoInfo">
        <h1 className="titulo2">Sobre Alejandra Hanashiro</h1>
        <p>
          Nací en Okinawa, Japón, pero me crie en Argentina, país donde me mudé
          cuando tenía un año.
        </p>
        <p>
          Soy diseñadora industrial egresada de la Facultad de Diseño y
          Urbanismo de la Universidad de Buenos Aires.
        </p>
        <p>
          Volví a Japón a estudiar en dos oportunidades. En 2015 dediqué mi
          estadía a aprender el arte popular de Okinawa. En 2019 con una beca
          JICA (Japan International Cooperation Agency), viajé a Kyoto para
          aprender distintas técnicas artesanales y tradicionales con el fin de
          aplicarlas en el diseño desde el diseño de productos.
        </p>
        <p>
          Actualmente formo parte del equipo de Patricia Lacano, en el cual nos
          dedicamos a desarrollar mobiliario, iluminación e interiorismo tanto
          para viviendas como para espacios semipúblicos.
        </p>
        <p>
          Me interesan los oficios y la exploración de los materiales naturales,
          ya que me gusta la manera en que cambian evidenciando su uso y el paso
          del tiempo.
        </p>
        <p>
          Desde UCHI mi intención es dar a conocer la cultura japonesa a través
          de objetos de uso cotidiano y utilitarios.
        </p>

        <div className="divDeBotones">
          <a
            style={{ textDecoration: "none" }}
            href="https://www.sites.google.com/view/ahanashiro/cv"
          >
            <button className="botonera">Ver mi currículum</button>
          </a>

          <a
            style={{ textDecoration: "none" }}
            href="https://www.behance.net/ahanashiro"
          >
            <button className="botonera2">Ver mi portfolio</button>
          </a>
        </div>
      </div>
    </div>
  );
};
