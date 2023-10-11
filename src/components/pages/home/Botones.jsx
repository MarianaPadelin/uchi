import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import "./Botones.css"
import { Button } from "@mui/material";


const images = [
  {
    id: "1",
    url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1697034381/uchi/inicio/IMG_7194_2_bnlqq7.jpg",
    title: "Suribachi",
    width: "318px",
    path: "/productos/suribachi",
  },
  {
    id: "2",
    url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1697034467/uchi/inicio/IMG_9637_1_fgnixn.jpg",
    title: "Chawan",
    width: "318px",
    path: "/productos/chawan",
  },
  {
    id: "3",
    url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1697034499/uchi/inicio/Contexto_01_b6xkw7.jpg",
    title: "Hangiri",
    width: "318px",
    path: "/productos/hangiri",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: "318px",

  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: "318px",    

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
  borderRadius: "20px",
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
  borderRadius: "20px",
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
  borderRadius: "20px",
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
              marginLeft: "12px",
              marginRight: "12px",
              marginBottom:"12px",
              display: "flex",
              justifyContent: "center",
              borderRadius: "20px",
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
      </Box>
      <div style={{ display: "flex", justifyContent: "center", marginTop:"68px", marginBottom:"68px" }}>
        <Button className="botonera" variant="contained" href="/productos">
          Ver todos
        </Button>
      </div>
    </div>
  );
}
