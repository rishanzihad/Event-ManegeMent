

import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";

import Services from "../../Components/ Services/ Services";


const Home = () => {
   const service =useLoaderData()
  
    
    return (
        <div>
            <Banner></Banner>
            <Services service={service}></Services>
           
        </div>
    );
};

export default Home;