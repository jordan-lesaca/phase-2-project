import React from 'react'
import RaveCard from './RaveCard'

function Raves({raves, deleteRave, updateRave }) {


    return (

      <div id="rave-collection">
        {raves.map(rave => {
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