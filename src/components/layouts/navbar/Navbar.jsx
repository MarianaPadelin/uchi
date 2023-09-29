import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
// import { styled } from "@mui/material/styles";
import "./Navbar.css"
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const pages = [
  { id: "productos", name: "Productos", path: "/productos" },
  { id: "servicios", name: "Servicios", path: "/servicios" },
  { id: "about", name: "Sobre UCHI", path: "/about" },
  { id: "info", name: "Información Útil", path: "/info" },
  { id: "contacto", name: "Contacto", path: "/contacto" },
]; 

// const productos = [{id: "suribachi", name: "suribachi"},{id: "hangiri", name: "hangiri"},{id: "chawan", name:"chawan"}]

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);




  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    
    
  };

 

  //PARA NAVBAR ANCHO USAR ESTO
//   const StyledToolbar = styled(Toolbar)(({ theme }) => ({
//     alignItems: "flex-start",
//     paddingTop: theme.spacing(1),
//     paddingBottom: theme.spacing(2),
//     // Override media queries injected by theme.mixins.toolbar
//     "@media all": {
//       minHeight: 128,
//     },
//   }));
  return (
    <AppBar position="static" sx={{ backgroundColor: "#A2988D" }}>
      {/* <StyledToolbar> */}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> ESTO ES EL ICONO */}

          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            
          </Typography> */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
            }}
          >
            <img
              style={{ width: "30%", margin: "1vw" }}
              src="src\components\common\Logos\1.2-Negro_Horizontal.png"
            ></img>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ id, name, path }) => (
                <MenuItem key={id} onClick={handleCloseNavMenu}>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={path}
                  >
                    <Typography textAlign="center">{name}</Typography>
                  </Link>
                </MenuItem>
              ))}
              <MenuItem>
                <Link
                  style={{ color: "white" }}
                  to="https://www.youtube.com/channel/UCZyzYTcjeYO-M1M48_XiM2Q"
                  target="_blank"
                >
                  <YouTubeIcon />
                </Link>
                <Link
                  style={{ color: "white" }}
                  to="https://www.instagram.com/uchi__ar/"
                  target="_blank"
                >
                  <InstagramIcon />
                </Link>
                <Link
                  to="https://wa.me/541169550440?text=Buenos días. Estoy interesado en información sobre"
                  target="_blank"
                ></Link>
              </MenuItem>
            </Menu>
          </Box>

          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            UCHI
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/">
              <img
                style={{ width: "60%", margin: "1vw" }}
                src="src\components\common\Logos\1.2-Negro_Horizontal.png"
              ></img>
            </Link>

            {pages.map(({ id, name, path }) => (
              <Button
                key={id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  style={{ textDecoration: "inherit", color: "white" }}
                  to={path}
                >
                  {name}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
          </Box>
        </Toolbar>
      </Container>
      {/* </StyledToolbar> */}
    </AppBar>
  );
};

export default Navbar;
