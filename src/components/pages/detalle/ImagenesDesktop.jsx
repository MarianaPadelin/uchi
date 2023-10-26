import { ImageList, ImageListItem } from "@mui/material";

export const ImagenesDesktop = ({ seleccionado }) => {
  //no abre la foto en grande
  return (
    <div>
      <ImageList
        sx={{ width: 800, marginBottom:"0"}}
        variant="quilted"
        cols={6}
        gap={24}
        rowHeight={121}
      >
        <ImageListItem cols={3} rows={4}>
          <img
            className="imagenDetalle"
            src={seleccionado.img1}
            alt={seleccionado.title}
            loading="lazy"

          />
        </ImageListItem>
        <ImageListItem cols={3} rows={2}>
          <img
            style={{ marginBottom: "24px" }}
            className="imagenDetalle"
            src={seleccionado.img2}

            alt={seleccionado.title}
            loading="lazy"
          />
          <ImageListItem cols={3} rows={2}>
            <img
              style={{ marginTop: "1vh" }}
              className="imagenDetalle"
              src={seleccionado.img3}
              alt={seleccionado.title}
              loading="lazy"
            />
          </ImageListItem>
        </ImageListItem>
      </ImageList>
    </div>
  );
};
