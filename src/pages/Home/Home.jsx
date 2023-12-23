import Banner from "../../components/Home/Banner/Banner";
import BenifitedPeople from "../../components/Home/BenifitedPeople/BenifitedPeople";
import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar/Navbar";

const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <BenifitedPeople></BenifitedPeople>
            <Footer></Footer>
        </div>
    );
};

export default Home;