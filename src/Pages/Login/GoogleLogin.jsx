/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { FcGoogle } from 'react-icons/fc';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const GooglelLogin = () => {
    const {googleLogin} =useContext(AuthContext)
    const navigate =useNavigate()
    const handleGooglelLogin =(media)=>{
        media()
        .then(res=>{
           
            
            toast.success('User Log In Successfully')
            navigate('/')
        })
    
    .catch(error =>toast.error(error.message))
    }
    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button onClick={()=>handleGooglelLogin(googleLogin)} className="btn btn-neutral "><FcGoogle></FcGoogle>Google</button>
            </div>
        </>
    );
};

export default GooglelLogin;