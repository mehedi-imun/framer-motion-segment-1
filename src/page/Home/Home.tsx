import Slider from "../components/Slider";
import NabBar from "../shared/NabBar";
import Banner from "./Banner";
import MyProjects from "./MyProjects";
import MyWork from "./MyWork";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto overflow-hidden">
            <NabBar></NabBar>
            <Banner></Banner>
            <MyWork></MyWork>
            <MyProjects></MyProjects>
            <Slider></Slider>
        </div>
    );
};

export default Home;