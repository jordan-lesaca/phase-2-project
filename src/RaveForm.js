import React from 'react'

//both rave and raveform are children of app

function RaveForm(){

    function handleSubmit(e){
        e.preventDefault() //stop page from refreshing. 
    }

    return (
        <div> 
            <h3>Add a Rave Container</h3>
            <form onSubmit={handleSubmit} >
                <label>
                    Artist:
                        <input type="text"/>
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