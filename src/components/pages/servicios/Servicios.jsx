import { Button, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { servicios } from "../../../routes/servicios";
import "./Servicios.css"
import { Link } from "react-router-dom";

export const Servicios = () => {
  return (
    <div className="servicios">
      <div className="titulos">
        <h1>Nuestros servicios</h1>
        <p>Párrafo descriptivo</p>
      </div>
      <div className="link1">
        <Link style={{ color:"black"}} to="/productos">Volver a la colección</Link>
      </div>

      <ImageList className="listadoServicios" cols={3} gap={10} >
        {servicios.map(({ id, title }) => (
          <ImageListItem
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap", marginBottom:"4vh" }}
            key={id}
          >
            <img
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696603802/uchi/icono_generico_ezfvml.png"
              // src={`${icono}?w=164&h=164&fit=crop&auto=format`}
              alt={title}
              loading="lazy"
              style={{ borderRadius: "3vw", width: "40%", marginBottom:"3vh" }}
            />

            <ImageListItemBar
              style={{
                borderRadius: "3vw",
                backgroundColor: "black",
                opacity: "50%",
                color: "black",
              }}
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
