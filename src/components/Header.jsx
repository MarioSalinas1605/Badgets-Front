import React from 'react'
import header from '../images/platziconf-logo.svg'
import './styles/Header.scss'

function Header() {
    return(
        <div className="Header__hero">
            <img 
                className="Header__hero-image img-fluid"
                src={header} 
                alt="Logo"
            />
        </div>
    )
}

export default Header