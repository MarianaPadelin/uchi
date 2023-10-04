import ButtonBaseDemo from "./Botones"
import Home from "./Home"
import { Servicios } from "./Servicios"

const HomeContainer = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <Home />
      <ButtonBaseDemo />
      <Servicios />
    </div>
  );
}

export default HomeContainer