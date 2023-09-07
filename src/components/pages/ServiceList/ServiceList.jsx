import { Link } from "react-router-dom";

const ServiceList = () => {
  return (
    <div>
      <h1>Acá va la lista de servicios</h1>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
}

export default ServiceList