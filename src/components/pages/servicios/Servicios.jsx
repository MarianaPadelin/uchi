import { Button, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { servicios } from "../../../routes/servicios";
import DataUsageIcon from "@mui/icons-material/DataUsage";

export const Servicios = () => {
  return (
    <div className="servicios">
      <div className="titulos">
        <h1>Nuestros productos</h1>
        <p>Párrafo descriptivo</p>
      </div>

      <ImageList className="listadoFotos" cols={3} gap={10}>
        {servicios.map(({ id, title }) => (
          <ImageListItem key={id}>
            {/* <img
              src={`${icono}?w=164&h=164&fit=crop&auto=format`}
              alt={title}
              loading="lazy"
              style={{ borderRadius: "3vw" }}
            /> */}
            <DataUsageIcon />
            <ImageListItemBar
              style={{ borderRadius: "3vw", backgroundColor:"white", opacity:"10%" }}
              title={title}
              actionIcon={
                <Button variant="text" style={{ color: "#f4f4f4" }}>
                  Ver
                </Button>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <h1></h1>
    </div>
  );
}
