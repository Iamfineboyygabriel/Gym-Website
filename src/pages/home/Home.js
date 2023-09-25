import MainHeader from "../../components/MainHeader"
import Programs from "../../components/Programs";
import Values from "../../components/Values";
import FAQs from "../../components/FAQs";
import Testimonials from "../../components/Testimonials";
import "./home.css"



const Home = () => {
  return (
    <>
    <MainHeader/> {/*<MainHeader/> //content is in the HEADER.JS */}
    <Programs />
    <Values/>
    <FAQs />
    <Testimonials/>
    </>
  );
};

export default Home