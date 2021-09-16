import React from 'react'
import HomeCard from './HomeCard'

function Home({raves}){


    return (
        <div id="rave-collection">
        <h2>List of Artists with upcoming raves:</h2>
          {raves.map(rave => {
            return (
              <HomeCard rave={rave} key={rave.id} />  
               )
            })
          }
        </div>
      );
    }

export default Home