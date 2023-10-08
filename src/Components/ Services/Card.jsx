/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Card = ({card}) => {
    const { id,name,price,image,short_description}=card
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure className=" h-72 pt-10">
    <img  src={image} alt="Shoes" className="rounded-xl w-full h-72" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-3xl font-bold justify-center">{name}</h2>

    <p className="mb-2 text-lg flex justify-center">{short_description}</p>
    <p className="text-2xl font-semibold flex justify-center ">Price: {price}$</p>
    <div className="card-actions">
    <Link className="btn btn-primary w-full" to={`/details/${id}`}> <button >Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default Card;