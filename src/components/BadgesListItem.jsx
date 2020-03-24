import React from 'react'
import './styles/BadgesListItem.scss'
import Gravatar from './Gravatar.jsx'

function BadgesListItem(props) {
    
    return(
        <div className="BadgesListItem">
            <Gravatar email={props.badge.email} className="BadgesListItem__avatar" />
            <div>
                <strong>
                    {props.badge.firstName} {props.badge.lastName}
                </strong>
                <br/>
                @{props.badge.twitter}
                <br/>
                {props.badge.jobTitle}
            </div>
        </div>
    )
}

export default BadgesListItem