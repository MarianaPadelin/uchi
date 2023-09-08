import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./components/layouts/Layouts.jsx";
import Error from "./components/pages/error/Error.jsx";
import { routesApp } from "./routes/routesApp.js";


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <ContextProvider> */}
        <Routes>
          <Route element={<Layouts />}>
            {routesApp.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))}
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>

        {/* </ContextProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
