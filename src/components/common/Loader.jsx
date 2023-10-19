
import { Button } from "@mui/material";
import { SkewLoader } from "react-spinners";


const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        flexDirection:"column",
        marginTop: "20vh",
        width: "100%",
      }}
    >
      <SkewLoader color="#a2988e" size={70} />

      <Button href="/" className="botonera" style={{marginTop:"20vh"}} variant="contained">
        Volver al inicio
      </Button>
    </div>
  );
}

export default Loader