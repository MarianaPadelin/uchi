import {Button, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import "./Productos.css"
import { productosCompletos } from "../../../routes/productosCompletos";




export const Productos = () => {
  return (
    <div className="productos">
      <div className="titulos">
        <h1>Nuestros productos</h1>
        <p>Párrafo descriptivo</p>
      </div>

      <ImageList className="listadoFotos" cols={3} gap={10}>
        {productosCompletos.map(({ id, img1, title }) => (
          <ImageListItem key={id}>
            <img
              src={`${img1}?w=164&h=164&fit=crop&auto=format`}
              alt={title}
              loading="lazy"
              style={{ borderRadius: "3vw" }}
            />
            <ImageListItemBar
              style={{ borderRadius: "3vw" }}
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

     
    </div>
  );
}
