import { HomeDesktop } from "./HomeDesktop";
import { HomeCelular } from "./HomeCelular";
import "./Home.css";

const Home = () => {
  return (
    <div>{window.innerWidth > 768 ? <HomeDesktop /> : <HomeCelular />}</div>
  );
};

export default Home;
