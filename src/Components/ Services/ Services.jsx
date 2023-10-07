/* eslint-disable react/prop-types */


import Card from "./Card";

const  Services = ({service}) => {
  
    
    return (
        <div>
            <h2 className=" justify-center flex text-5xl font-bold ">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           
            {
               service.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
        </div>
    );
};

export default  Services;