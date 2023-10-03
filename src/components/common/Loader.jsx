import { Button } from "react-bootstrap";
import { SkewLoader } from "react-spinners";


const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2vh",
      }}
    >
      <SkewLoader color="#36d7b7" />

      <Button href="/" className="botonera"> Volver al inicio</Button>
    </div>
  );
}

export default Loader