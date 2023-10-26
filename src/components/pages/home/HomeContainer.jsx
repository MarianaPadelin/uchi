import ButtonBaseDemo from "./Botones"
import Home from "./Home"
import { Servicios } from "./Servicios"

const HomeContainer = () => {
  return (
    <div>
      <Home />
      <ButtonBaseDemo />
      <Servicios />
    </div>
  );
}

export default HomeContainer