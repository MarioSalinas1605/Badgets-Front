import React from 'react'
import './styles/BadgesListItem.scss'

function BadgesListItem(props) {
    console.log(props);
    
    return(
        <div className="BadgesListItem">
            <img
                className="BadgesListItem__avatar" 
                src={props.badge.avatarUrl} 
                alt={`${props.badge.firstName} ${props.badge.lastName}`}
            />
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