/* eslint-disable react/prop-types */
import toast from "react-hot-toast";


const ServiceDetailsCard = ({service}) => {
    const {id,name,price,image,details}=service

    const bookedService =()=>{
      const bookedCard =[];
      const bookedService = JSON.parse(localStorage.getItem('booked'))
        if(!bookedService){
          bookedCard.push(service)
          localStorage.setItem('booked',JSON.stringify(bookedCard))
          toast.success("Booked Successful");
        }
        else{
          const isExits =bookedService.find(service=> service.id == id)
  
          if(!isExits){
            bookedCard.push(...bookedService,service)
          localStorage.setItem('booked',JSON.stringify(bookedCard))
          toast.success("Booked Successful");
          }
          else{
            toast.error("You Booked Already");
          }
        }
    }
    return (
        <div className=" flex md:flex-row  flex-col bg-base-100 shadow-xl">
       <div className="flex-1">
       
          <img   src={image} alt="Shoes" className=" rounded w-full h-full " />
      
       </div>
          
      <div className=" flex-1">
      <div className="relative flex w-full flex-1  flex-col rounded bg-gradient-to-tr from-red-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
  <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
    <h1 className="block font-sans text-4xl font-bold uppercase leading-normal text-white antialiased">
     {name}
    </h1>
    <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
      <span className="mt-2 text-xl">$</span>{price}
     
    </h1>
  </div>
  <div className="p-0">
    <ul className="flex flex-col gap-4">
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-white/20 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
         {details}
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-white/20 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
          200+ Team Member
        </p>
      </li>

    </ul>
  </div>
  <div className="mt-12 p-0">
    <button onClick={bookedService}
      className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-dark="true"
    >
      Booked
    </button>
  </div>
</div>

      </div>

      </div>
    );
};

export default ServiceDetailsCard;