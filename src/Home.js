import Banner from "./Banner";
import About from "./About";
// import Search from "./Search";
import Services from "./Services";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
import Courses from "./Courses";
import Link from "react-router-dom";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <br />
      <br />
      <br />
      <Courses />
      {/* <Search/> */}
      <br />
      <br />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
