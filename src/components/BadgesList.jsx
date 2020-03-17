import React from 'react'
import BadgesListItem from './BadgesListItem.jsx'
import './styles/BadgesList.scss'

function BadgesList(props) {
    return(
        <div className="BadgesList">
            <ul className="list-unstyled">
                {
                    props.badges.map(badge=>{
                        return(
                            <li key={badge.id}>
                                <BadgesListItem badge={badge}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default BadgesList