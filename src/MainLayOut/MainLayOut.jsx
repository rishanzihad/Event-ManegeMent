import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer/Footer";




const MainLayOut = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default MainLayOut;