import React, { useState } from 'react'

//both rave and raveform are children of app

function RaveForm({newRave}){
    const [formData, setFormData] = useState({
        artist: "",
        image: "",
        date: "",
        venue: "",
        city: ""
    })

    function handleSubmit(e){
        e.preventDefault()

        const newEvent = {
            artist: formData.artist,
            image: formData.image,
            date: formData.date,
            venue: formData.venue,
            city: formData.city
        }

        fetch('http://localhost:3000/raves', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEvent)
        })
            .then((res) => res.json())
            .then((rave) => newRave(rave))
            setFormData({
                artist: "",
                image: "",
                date: "",
                venue: "",
                city: ""
            })
    }

    function handleChange(e){
        return console.log(e)
    }

    return (
        <div> 
            <h3>Add a Rave Container</h3>
            <form onSubmit={handleSubmit} >
                <label>
                    Artist:
                    <input style={{marginRight: "10px"}} type="text" value={artist} onChange={handleArtistChange}/>
                </label>
                <label>
                    Album Cover:
                    <input style={{ marginRight: '10px'}} type="text" value={image} onChange={handleImageChange}/>    
                </label>
                <label>
                    Date:
                    <input style={{ marginRight: '10px'}} type="text" value={date} onChange={handleDateChange}/>    
                </label>
                <label>
                    Venue:
                    <input style={{ marginRight: '10px'}} type="text" value={venue} onChange={handleVenueChange}/>    
                </label>
                <label>
                    City:
                    <input style={{ marginRight: '10px'}} type="text" value={city} onChange={handleCityChange}/>    
                </label>
                    <input style={{ marginRight: '10px'}} type="submit" value="Add an event!"/>
            </form>
        </div>
    )
}

export default RaveForm