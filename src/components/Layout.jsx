import React from 'react'
import Navbar from './Navbar.jsx'

function Layout(props) {
    
    return(
        <>
            <Navbar />
            {props.children}
        </>
    )
}

export default Layout