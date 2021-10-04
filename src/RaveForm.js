import React, { useState } from 'react'

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
                "content-type": "application/json"
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
        let key = e.target.name
        let value = e.target.value
        console.log(e)

        setFormData({...formData, [key] : value })
    }


    return (
        <div className="container"> 
            <form className="add-rave-form" onSubmit={handleSubmit} >
            <h3>Add a Rave Container</h3>
            <label>Artist: </label>
            <input
            type="text"
            name="artist"
            placeholder="Enter an artist's name..."
            value={formData.artist}
            className="input-text"
            onChange={handleChange}
          />
          <label>Image: </label>
          <input
            type="text"
            name="image"
            placeholder="Enter an image url..."
            className="input-text"
            value={formData.image}
            onChange={handleChange}
          />
          <label>Venue: </label>
          <input
            type="text"
            name="venue"
            placeholder="Enter an venue name..."
            className="input-text"
            value={formData.venue}
            onChange={handleChange}
          />
          <label>Date: </label>
          <input
            type="text"
            name="date"
            placeholder="Enter date of event..."
            className="input-text"
            value={formData.date}
            onChange={handleChange}
          />
          <label>City: </label>
          <input
            type="text"
            name="city"
            placeholder="Enter city of event..."
            className="input-text"
            value={formData.city}
            onChange={handleChange}
          />
                    <input style={{ marginRight: '10px'}} type="submit" value="Add an event!"/>
            </form>
        </div>
    )
}

export default RaveForm