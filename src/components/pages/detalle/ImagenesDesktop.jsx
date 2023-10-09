import { ImageList, ImageListItem } from "@mui/material";

export const ImagenesDesktop = ({seleccionado}) => {

  //no abre la foto en grande
  return (
    <div>
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="quilted"
        cols={4}
        gap={8}
        rowHeight={121}
      >
        <ImageListItem cols={2} rows={3}>
          <img
            className="imagenDetalle"
            src={seleccionado.img1}
            // {...srcset(item.img, 121, item.rows, item.cols)}
            alt={seleccionado.title}
            loading="lazy"
            // onClick={window.open(seleccionado.img1)}
            // role="button"
  
          />
        </ImageListItem>
        <ImageListItem cols={2} rows={1.5}>
          <img
            style={{ marginBottom: "1vh" }}
            className="imagenDetalle"
            src={seleccionado.img2}
            // {...srcset(item.img, 121, item.rows, item.cols)}
            alt={seleccionado.title}
            loading="lazy"
            // onClick={`window.open${seleccionado.img1}`}
            // role="button"
          />
          <ImageListItem cols={2} rows={1.5}>
            <img
              style={{ marginTop: "1vh" }}
              className="imagenDetalle"
              src={seleccionado.img3}
              // {...srcset(item.img, 121, item.rows, item.cols)}
              alt={seleccionado.title}
              loading="lazy"
              // onClick={`window.open${seleccionado.img1}`}
              // role="button"
            />
          </ImageListItem>
        </ImageListItem>
      </ImageList>
    </div>
  );
}
