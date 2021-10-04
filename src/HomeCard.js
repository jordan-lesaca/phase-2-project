import React from 'react'
import './App.css'

function HomeCard({ rave }){
    return (
        <div className="homeCard">
            <h2>{rave.artist}</h2>
        </div>
    )
}

export default HomeCard