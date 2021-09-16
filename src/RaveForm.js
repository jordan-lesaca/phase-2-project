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
        let key = e.target.artist
        let value = e.target.value

        setFormData({...formData, [key] : value })
    }

    return (
        <div> 
            <h3>Add a Rave Container</h3>
            <form onSubmit={handleSubmit} >
                <label>
                    Artist:
                    <input style={{marginRight: "10px"}} type="text" value={formData.artist} onChange={handleChange}/>
                </label>
                <label>
                    Album Cover:
                    <input style={{ marginRight: '10px'}} type="text" value={formData.image} onChange={handleChange}/>    
                </label>
                <label>
                    Date:
                    <input style={{ marginRight: '10px'}} type="text" value={formData.date} onChange={handleChange}/>    
                </label>
                <label>
                    Venue:
                    <input style={{ marginRight: '10px'}} type="text" value={formData.venue} onChange={handleChange}/>    
                </label>
                <label>
                    City:
                    <input style={{ marginRight: '10px'}} type="text" value={formData.city} onChange={handleChange}/>    
                </label>
                    <input style={{ marginRight: '10px'}} type="submit" value="Add an event!"/>
            </form>
        </div>
    )
}

export default RaveForm