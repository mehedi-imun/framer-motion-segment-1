import NabBar from "../shared/NabBar";
import Banner from "./Banner";
import MyWork from "./MyWork";

const Home = () => {
    return (
        <div className="max-w-7xl">
            <NabBar></NabBar>
            <Banner></Banner>
            <MyWork></MyWork>
        </div>
    );
};

export default Home;