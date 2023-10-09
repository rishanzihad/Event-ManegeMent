

const ServiceDetailsCard = ({service}) => {
    const {id,name,price,image,details}=service
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure className="  pt-10">
          <img   src={image} alt="Shoes" className="rounded-xl w-full max-h-[80vh] " />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-3xl font-bold justify-center">{name}</h2>
      
          <p className="mb-2 text-xl flex justify-center">{details}</p>
          <p className="text-2xl font-semibold flex justify-center ">Price: {price}$</p>
          <div className="card-actions">
         <button className="btn btn-primary w-full">Booked</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetailsCard;