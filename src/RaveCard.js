import React from 'react'

function RaveCard({ rave, deleteRave, updateRave}){
    const { id, 
        artist, 
        image, 
        venue, 
        city, 
        date, 
        likes } = rave
        const defaultPic = "https://cdn.shopify.com/s/files/1/0385/6229/files/d14211d213a7f0fbad2d13d08d3a4580c63e1dcf_large.jpg?v=1482619950https://cdn.shopify.com/s/files/1/0385/6229/files/d14211d213a7f0fbad2d13d08d3a4580c63e1dcf_large.jpg?v=1482619950"

    function handleDeleteClick(){
        fetch(`http://localhost:3000/raves/${id}`, {
        method: "DELETE"
            })
        deleteRave(id)
    }

    function handleLikes(){
        const updatedRave = {
            likes: likes + 1   
        }

        fetch(`http://localhost:3000/raves/${id}`, {
            method: "PATCH",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(updatedRave)
                })
            .then(res => res.json())
            .then(updateRave)
        }

    function handleDislikes(){
        const updatedRave = {
            likes: likes - 1   
        }
    
        fetch(`http://localhost:3000/raves/${id}`, {
            method: "PATCH",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(updatedRave)
                })
            .then(res => res.json())
            .then(updateRave)
        }
    
    return(
        <div className="">   
            <h3>{artist}</h3>
                <p>Likes: {likes}</p>          
            <h4>Date: {!date ? "TBA" : date} </h4>
                <p>Venue, City: {!venue ? "TBA" : venue}, {!city ? "TBA" : city} </p>
            <button className="delete-button" onClick={handleDeleteClick} >Delete</button>
            <button className="like-button" onClick={handleLikes} >Like</button>
            <button className="dislike-button" onClick={handleDislikes} >Dislike</button>
            <p>Album Art:</p>
                <img src={!image ? defaultPic : image} alt={artist} style={{
                    height: 200,
                    width: 200
                }}
                /> 
        </div>
    )
}

export default RaveCard