
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailsCard from "./ServiceDetailsCard";

const ServiceDetails = () => {
   
    
    const services =useLoaderData()
    const [service,setService] =useState([])
    const {id} =useParams()
   
    useEffect(()=>{
        const findService =services && services?.find(service => service.id == id)
        setService(findService)
       
    },[id,services])
   
    return (
        <div>
            <ServiceDetailsCard key={service.id} service={service}></ServiceDetailsCard>
        </div>
    );
};

export default ServiceDetails;