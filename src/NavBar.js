import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(){
    return(
        <div>
            <NavLink style={{ marginRight: '10px'}} to='/'> Home</NavLink>
            <NavLink style={{ marginRight: '10px'}} to='/raves'> Raves</NavLink>
        </div>
    )
}

export default NavBar