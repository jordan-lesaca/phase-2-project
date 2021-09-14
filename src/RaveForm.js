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
        newRave({artist: artist})
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
//upon submit, must post to database (Invoking a fetch post call)
//frontend, render 

//how to make this a controlled form
//what happens on change and what happens on submit?
//What functions are called and where are they defined?

//After post and get are done:
// - router (need 3 routes)
// - nav

export default RaveForm