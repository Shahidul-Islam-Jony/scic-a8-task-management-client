import Banner from "../../components/Home/Banner/Banner";
import Navbar from "../../components/shared/Navbar/Navbar";

const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;