

const Banner = () => {
    return (
        <div className="mb-10 mt-10 ">
        <div className="hero max-h-screen lg:min-h-[80vh] rounded-xl" style={{backgroundImage: 'url(https://i.ibb.co/my2svQT/1-7-N4-P58g-AXl-D9b-Ego-UIsm2w.jpg'}}>
 <div className="hero-overlay bg-blue-400 bg-opacity-60"></div>
     <div className="hero-content text-center text-neutral-content">
  <div className="lg:max-w-full max-w-sm">
  <div className="mt-32">
        <h1 className=" text-2xl lg:text-5xl font-bold  flex items-center text-white justify-center">Welcome To Our Service</h1>
   
        <div className="mt-10 mb-10 flex justify-center items-center">
        <input   className="shadow text-black w-96  h-11 bg-slate-100" placeholder="Search Here" type="text" />
        <button  className=" btn  bg-red-500">Search</button> 
          </div>
        </div>
     </div>
     </div>
  </div >
         <div className="mt-10">
         
         </div>
  
     </div>
   
           
     
        
    );
};

export default Banner