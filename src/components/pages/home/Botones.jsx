import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import "./Botones.css"
import { Button } from "@mui/material";


const images = [
  {
    id: "1",
    url: "https://d22fxaf9t8d39k.cloudfront.net/257be6d9ec51f8cf586e2f062cc3381c860d6a7e757edca56648c6e03de9457c58154.jpeg",
    title: "Producto 1",
    width: "25%",
    path: "/productos",
  },
  {
    id: "2",
    url: "https://d22fxaf9t8d39k.cloudfront.net/248a2104cca292e92162b8ca298a93cd53fdc27cae07712e1f576f6f5d2a7aeb58154.jpg",
    title: "Producto 2",
    width: "25%",
    path: "/servicios",
  },
  {
    id: "3",
    url: "https://d22fxaf9t8d39k.cloudfront.net/82bee09b3b367d833bc928e4192a4d8b458470d443709a1f2948461e3bc44d7258154.jpg",
    title: "Producto 3",
    width: "25%",
    path: "/",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
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
      <Box className="botones">
        {images.map(({ id, title, path, url, width }) => (
          <ImageButton
            focusRipple
            key={id}
            style={{
              width: width,
              marginLeft: "3vw",
              marginRight: "3vw",
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
          variant="contained"
          size="large"
          style={{ backgroundColor: "#719c7e", margin: "1vh", width: "40%" }}
        >
          Ver más productos
        </Button>
      </Box>
    </div>
  );
}
