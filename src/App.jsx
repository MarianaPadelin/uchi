import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./components/layouts/Layouts.jsx";
import Error from "./components/pages/error/Error.jsx";
import { routesApp } from "./routes/routesApp.js";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layouts />}>
            {routesApp.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))}
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
