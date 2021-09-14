import React, { useState } from 'react'

//both rave and raveform are children of app

function RaveForm({newRave}){

    const [artist, setArtist] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        setArtist('') //stop page from refreshing. 
        //send fetch call using artist that user submitted in the form
        //which would be name as is defined in state
        fetch('http://localhost:3000/raves', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({artist: artist})
        })
            .then((res) => res.json())
            .then((rave) => newRave(rave))
    }

    function handleChange(e){
        setArtist(e.target.value)
    }

    return (
        <div> 
            <h3>Add a Rave Container</h3>
            <form onSubmit={handleSubmit} >
                <label>
                    Artist:
                        <input type="text" value={artist} onChange={handleChange}/>
                </label>
                    <input type="submit" value="Add an event!"/>
            </form>
        </div>
    )
}


//After post and get are done:
// - router (need 3 routes)
// - nav

//After MVP:
//Add attributes to raves
//Accep img attribute in the form
//Adding a like button and increment/decrement (is this going to involve a PATCH?
//DOM manipulation for the userthat is cleared every time the app components mount?


export default RaveForm