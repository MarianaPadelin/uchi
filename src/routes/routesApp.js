import ItemListContainer from "../components/pages/ItemList/ItemListContainer";
import ServiceListContainer from "../components/pages/ServiceList/ServiceListContainer";
import HomeContainer from "../components/pages/home/HomeContainer";

export const routesApp = [
  {
    id: "home",
    path: "/",
    Element: HomeContainer,
  },
  {
    id: "productos",
    path: "/productos",
    Element: ItemListContainer,
  },
  {
    id: "servicios",
    path: "/servicios",
    Element: ServiceListContainer,
  },
  {
    id: "sobre uchi",
    path: "/about",
    Element: ServiceListContainer,
  },
  {
    id: "información útil",
    path: "/info",
    Element: ServiceListContainer,
  },
  {
    id: "contacto",
    path: "/contacto",
    Element: ServiceListContainer,
  },
];
