
export const ImagenesCelular = ({seleccionado}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img className="imagenesCelu" src={seleccionado.img1}></img>
      <img className="imagenesCelu" src={seleccionado.img2}></img>
      <img className="imagenesCelu" src={seleccionado.img3}></img>
    </div>
  );
}
