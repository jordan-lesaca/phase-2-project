import React, { useState } from 'react'

//both rave and raveform are children of app

function RaveForm({newRave}){
    const [artist, setArtist] = useState("")
    const [image, setImage] = useState("")
    const [date, setDate] = useState("")
    const [city, setCity] = useState("")
    const [venue, setVenue] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        setArtist('') 
        setImage('')
        setDate('')
        setCity('')
        setVenue('')

        fetch('http://localhost:3000/raves', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({artist: artist, 
                image: image, 
                date: date, 
                city: city, 
                venue: venue})
        })
            .then((res) => res.json())
            .then((rave) => newRave(rave))
    }

    function handleArtistChange(e){
        setArtist(e.target.value)
    }

    function handleImageChange(e){
        setImage(e.target.value)
    }

    function handleDateChange(e){
        setDate(e.target.value)
    }

    function handleVenueChange(e){
        setVenue(e.target.value)
    }

    function handleCityChange(e){
        setCity(e.target.value)
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