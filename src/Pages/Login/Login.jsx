import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";





const Login = () => {
    const {googleLogin,login} =useContext(AuthContext)
    const handleLogin =()=>{
        googleLogin()
        .then(res=>{console.log(res) 
            navigate(location?.state? location.state:'/')})
        .catch(error=>console.log(error))
    }
    const location =useLocation()
    const navigate =useNavigate()
    const handleSignIn =e=>{
        e.preventDefault()
        const email =e.target.email.value
        const password =e.target.password.value
        login(email,password)
        .then(res=>{
           
            
          toast.success('User Log In Successfully')
          navigate(location?.state? location.state:'/')})
  


        .catch(error =>toast.error(error.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
   
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <button onClick={handleLogin} className="btn mt-2 btn-primary">Google</button>
          
        </div>
      </form>
      <p className=' text-center mt-4'>Do not Have An Account? <Link className='text-blue-600 font-bold' to='/register'>Register</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;