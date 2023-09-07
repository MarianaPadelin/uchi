import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { rutasApp } from "./routes/routesApp.js";
import Layouts from "./components/layouts/Layouts.jsx";
import Error from "./components/pages/error/Error.jsx";
import ItemListContainer from "./components/pages/ItemList/ItemListContainer.jsx";
import HomeContainer from "./components/pages/home/HomeContainer.jsx";
import ServiceListContainer from "./components/pages/ServiceList/ServiceListContainer.jsx";


function App() {
  return (
    <>
      <h1>UCHI</h1>
      <BrowserRouter>
        {/* <CartContextProvider> */}
        <Routes>
          <Route element={<Layouts />}>
            <Route path="/" element={<HomeContainer />}></Route>
            <Route path="/productos" element={<ItemListContainer />}></Route>
            <Route path="/servicios" element={<ServiceListContainer />}></Route>
            {/* {rutasApp.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))} */}
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>

        {/* </CartContextProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
