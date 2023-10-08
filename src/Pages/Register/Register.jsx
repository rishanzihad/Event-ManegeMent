/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { NavLink, Navigate } from "react-router-dom";

const Register = () => {
    const {register,handleUpdateProfile} =useContext(AuthContext)
    const handleRegister =e=>{
        e.preventDefault()
        const name =e.target.name.value
        const email =e.target.email.value
        const image =e.target.image.value
        const password =e.target.password.value
        
        register(email,password)
       
        
        .then(res =>{
        handleUpdateProfile(name,image)
        .then(()=>{
            toast.success('User Create Successfully')
            Navigate('/')
        })
    })
    .catch(error =>{toast.error(error.message)}
    )
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now!</h1>
   
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input type="text" name="image" placeholder="ImageURL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
         <NavLink className="btn btn-primary"> <button >Register</button></NavLink>
          
          
        </div>
      </form>
     
    </div>
  </div>
</div>
    );
};

export default Register;