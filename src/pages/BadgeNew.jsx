import React from 'react'
import Badge from '../components/Badge.jsx'
import Navbar from '../components/Navbar.jsx'
import header from '../images/badge-header.svg'
import './styles/BadgeNew.scss'

function BadgeNew() {
    return (
        <>
            <Navbar />
            <div className="BadgeNew__hero">
                <img
                    className="img-fluid"
                    src={header}
                    alt="Logo"
                />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge
                            firstName="Richard"
                            lastName="Kaufman"
                            twitter="sparragus"
                            jobTitle="Frontend Engineer"
                            avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BadgeNew