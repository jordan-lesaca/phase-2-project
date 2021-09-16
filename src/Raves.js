import React from 'react'
import RaveCard from './RaveCard'

//child of app

function Raves({ raves }){

    const allRaves = raves.map((rave) => 
    <RaveCard 
    key={rave.id} 
    rave={rave} 
    date={rave.date}
    venue={rave.venue}
    city={rave.city}
    artist={rave.artist}
    image={rave.image} />)




    return(
        <div>
        <li className="">
        <h3>Rave Container</h3>
        {allRaves} 
        </li>
        </div>   
    )    
}

export default Raves