import React from 'react'

function RaveCard({ rave }){
    console.log(rave)
    return(
        <div>
            <h3>{rave.artist}</h3>
            <p>{rave.date} </p>
            <p>{rave.venue} </p>
        </div>
    )
}

export default RaveCard