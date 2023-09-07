import { SkewLoader } from "react-spinners";


const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20vh",
      }}
    >
      <SkewLoader color="#36d7b7" />
    </div>
  );
}

export default Loader