import { useEffect, useState } from "react";
import BookedCard from "./BookedCard";

const BookedPage = () => {
    
        const [booked,setBooked] =useState([])
        const [noBook, setNoBooked] =useState(false)

    useEffect(()=>{
        const bookedService = JSON.parse(localStorage.getItem('booked'))
        if(bookedService){
            setBooked(bookedService)
        }
        else{
           
            setNoBooked('No Data Found')
        }
        
        
    },[])
    
    
    return (
        noBook ? <p className="h-[50vh] flex justify-center items-center">{noBook}</p>:
        <div className="grid gap-4 md:grid-cols-2">
           {
            booked.map(booked=><BookedCard key={booked.id} booked={booked}></BookedCard>)
           }
        </div>
    );
};

export default BookedPage;