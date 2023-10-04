import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import "./Botones.css"
import { Button } from "@mui/material";


const images = [
  {
    id: "1",
    url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1696427462/uchi/Suribachi_detalle_omii2d.jpg",
    title: "Suribachi",
    width: "25%",
    path: "/productos",
  },
  {
    id: "2",
    url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1696429529/uchi/Chawan_qyriqw.jpg",
    title: "Chawan",
    width: "25%",
    path: "/servicios",
  },
  {
    id: "3",
    url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1696429584/uchi/Hangiri_uso_nuu3bv.jpg",
    title: "Hangiri",
    width: "25%",
    path: "/",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 200,
    
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function ButtonBaseDemo() {
  return (
    <div>
      <Box className="botones" id="botones">
        {images.map(({ id, title, path, url, width }) => (
          <ImageButton
            focusRipple
            key={id}
            style={{
              width: width,
              marginLeft: "3vw",
              marginRight: "3vw",
              display: "flex",
              justifyContent: "center",
              //poner bordes redondeados
            }}
            href={path}
          >
            <ImageSrc style={{ backgroundImage: `url(${url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {title}
                <br />
                Ver más
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
        <Button
          className="botonera"
          variant="contained"
          size="large"
          href="/productos"
        
        >
          Ver todos
        </Button>
      </Box>
    </div>
  );
}
