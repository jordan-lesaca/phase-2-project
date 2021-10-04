import React, { useState } from 'react'
import RaveCard from './RaveCard'

function Raves({raves, deleteRave, updateRave }) {
  const [searchTerm, setSearchTerm] = useState("")

    return (
      <div id="rave-collection">
      <h2> Search </h2>
      <input 
      type="text"
      placeholder="Search artist"
      onChange={(e) => {
          setSearchTerm(e.target.value)}}
      />
        {raves.filter((rave) => {
          if (searchTerm === "") {
            return rave 
        } else if (rave.artist.toLowerCase()
        .includes(searchTerm.toLowerCase())) 
        {
            return rave
        }
      return false
        })
        .map(rave => {
          return (
            <RaveCard 
            rave={rave} 
            key={rave.id} 
            deleteRave={deleteRave} 
            updateRave={updateRave} />
                  )
        })
        }
      </div>
    );
  }

export default Raves
