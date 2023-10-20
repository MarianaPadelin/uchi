import { ImageList, ImageListItem } from "@mui/material";

export const AboutDesktop = () => {
  return (
    <div>
      <div className="imagenesDesktop">
        <ImageList
          sx={{ width: 800, marginBottom:"10vh" }}
          variant="quilted"
          cols={6}
          gap={8}
          rowHeight={121}
        >
          <ImageListItem cols={3} rows={4}>
            <img
              className="imagenDetalle"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696936334/uchi/about/IMG_5815_jpg_mvavfw.jpg"
              // {...srcset(item.img, 121, item.rows, item.cols)}
              alt="uchi"
              loading="lazy"
              // onClick={window.open(seleccionado.img1)}
              // role="button"
            />
          </ImageListItem>
          <ImageListItem cols={3} rows={2}>
            <img
              style={{ marginBottom: "1vh" }}
              className="imagenDetalle"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696936336/uchi/about/IMG_1088_jpg_ai8zfh.jpg"
              // {...srcset(item.img, 121, item.rows, item.cols)}
              alt="uchi"
              loading="lazy"
              // onClick={`window.open${seleccionado.img1}`}
              // role="button"
            />
            <ImageListItem cols={3} rows={2}>
              <img
                style={{ marginTop: "1vh" }}
                className="imagenDetalle"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696936333/uchi/about/IMG_5861_jpg_pazkkw.jpg"
                // {...srcset(item.img, 121, item.rows, item.cols)}
                alt="uchi"
                loading="lazy"
                // onClick={`window.open${seleccionado.img1}`}
                // role="button"
              />
            </ImageListItem>
          </ImageListItem>
        </ImageList>
      </div>

      <div className="aboutDetalle">
        <p>
          UCHI es una palabra japonesa que las personas la utilizan para
          referirse a su propia casa. Tiene una connotación de hogar, representa
          el espacio propio. Su kanji 家 -ideograma- se incluye en la lengua
          japonesa en palabras como kazoku 家族, que significa familia o kagu
          家具, mobiliario. Remite a la valorización de lo propio, lo compartido
          y la tradición que cada familia transmite generación tras generación.
        </p>
        <p>
          En UCHI creemos en la idea de que este espacio propio debe ser
          habitado por objetos perdurables que con los cuidados adecuados,
          puedan formar parte de cada hogar por generaciones. La belleza se
          reflejará, de esta manera, doblemente: en el objeto en sí y en el
          efecto que produce el paso del tiempo.
        </p>
      </div>
      <div className="aboutDetalle">
        <p>
          Creemos que el entorno natural, las materias primas y la producción
          deben ser inseparables. Destacamos la importancia de rodearnos de
          objetos de fabricación local que manifiesten su belleza en su esencia
          natural. “Detrás de cada objeto hay un cierto clima, un cierto rango
          de temperaturas, una calidad de suelo determinada y otras muchas
          condiciones físicas. Contemplar su belleza es contemplar el trabajo
          espontáneo de la naturaleza.” (Yanagi Sōetsu, 1889-1961) Nuestra
          producción es de baja escala. Si bien algunos procesos se realizan de
          forma estandarizada, cada una de nuestras piezas se tornea, cuela y
          esmalta una por una, llevando la impronta del artesano.
        </p>
      </div>
    </div>
  );
}
