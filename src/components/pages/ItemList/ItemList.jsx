import { Link } from "react-router-dom"

const ItemList = () => {
  return (
    <div>
        <h1>Acá va la lista de productos</h1>
        <Link to={"/"}><button>Home</button></Link>
    </div>
  )
}

export default ItemList