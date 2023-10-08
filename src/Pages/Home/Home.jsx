

import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";

import Services from "../../Components/ Services/ Services";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
   const service =useLoaderData()
  
    
    return (
        <div>
            <Banner></Banner>
            <Services service={service}></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;