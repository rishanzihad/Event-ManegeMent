import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";




const MainLayOut = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;