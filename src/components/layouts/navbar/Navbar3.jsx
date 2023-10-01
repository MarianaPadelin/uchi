import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import "./Navbar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { NavDropdown } from "react-bootstrap";

const pages = [
  { id: "productos", name: "Productos", path: "/productos" },
  { id: "servicios", name: "Servicios", path: "/servicios" },
  { id: "about", name: "Sobre UCHI", path: "/about" },
  { id: "info", name: "Información Útil", path: "/info" },
  { id: "contacto", name: "Contacto", path: "/contacto" },
];

const products = [
  {
    id: "suribachi",
    path: "/suribachi",
    title: "Suribachi",
  },
  {
    id: "chawan",
    path: "/chawan",
    title: "Chawan",
  },
  {
    id: "hangiri",
    path: "/hangiri",
    title: "Hangiri",
  },
  {
    id: "accesorios",
    path: "/accesorios",
    title: "Accesorios",
  },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#A2988D" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* VERSION MOVIL */}
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

          {/*  VERSION ESCRITORIO */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/">
              <img
                style={{ width: "60%", margin: "1vw" }}
                src="src\components\common\Logos\1.2-Negro_Horizontal.png"
              ></img>
            </Link>

            <NavDropdown title="Productos">
              {products.map(({ id, title, path }) => (
                <NavDropdown.Item
                  key={id}
                  // onClick={handleCloseNavMenu}
                  href={path}
                >
                  {title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
