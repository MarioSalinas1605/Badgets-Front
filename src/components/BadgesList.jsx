import React from 'react'
import BadgesListItem from './BadgesListItem.jsx'
import { Link } from 'react-router-dom'
import './styles/BadgesList.scss'

function BadgesList(props) {

    if (props.badges.length === 0) {
        return(
            <>
                <h3>No badges were found</h3>
                <Link to="/badges/new" className="btn btn-primary">
                    Create new badge
                </Link>
            </>
        )        
    }

    return(
        <div className="BadgesList">
            <ul className="list-unstyled">
                {
                    props.badges.map(badge=>{
                        return(
                            <li key={badge.id}>
                                <Link
                                    to={`/badges/${badge.id}/edit`}
                                    className="text-reset text-decoration-none"
                                >
                                    <BadgesListItem badge={badge}/>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default BadgesList