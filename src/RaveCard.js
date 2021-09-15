import React from 'react'

function RaveCard({  
    artist, 
    image, 
    date, 
    venue, 
    city }){

    const defaultPic = "https://cdn.shopify.com/s/files/1/0385/6229/files/d14211d213a7f0fbad2d13d08d3a4580c63e1dcf_large.jpg?v=1482619950https://cdn.shopify.com/s/files/1/0385/6229/files/d14211d213a7f0fbad2d13d08d3a4580c63e1dcf_large.jpg?v=1482619950"
    return(
        <div>
            <h3>{artist}</h3>
            <h4>Date: {!date ? "TBA" : date} </h4>
            <p>Venue, City: {!venue ? "TBA" : venue}, {!city ? "TBA" : city} </p>
            <img src={!image ? defaultPic : image} alt={artist} style={{
                height: 200,
                width: 200
              }} /> 
        </div>
    )
}

export default RaveCard