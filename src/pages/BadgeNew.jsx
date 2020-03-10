import React from 'react'
import Navbar from '../components/Navbar.jsx'
import header from '../images/badge-header.svg'
import '../styles/BadgeNew.scss'

function BadgeNew() {
    return(
        <>
            <Navbar />
            <div className="BadgeNew__hero">
                <img 
                    className="img-fluid" 
                    src={header} 
                    alt="Logo"
                />
            </div>
        </>
    )
}

export default BadgeNew