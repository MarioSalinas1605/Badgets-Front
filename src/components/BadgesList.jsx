import React from 'react'
import BadgesListItem from './BadgesListItem.jsx'
import useSearchBadge from '../customHooks/useSearchBadge'
import { Link } from 'react-router-dom'
import './styles/BadgesList.scss'

function BadgesList({badges}) {
    const { query, setQuery, filteredBadges } = useSearchBadge(badges)

    if (filteredBadges.length === 0) {
        return(
            <div>
                <div className="form-group">
                    <label>Filter badge</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                </div>
                <h3>No badges were found</h3>
                <Link to="/badges/new" className="btn btn-primary">
                    Create new badge
                </Link>
            </div>
        )        
    }

    return(
        <div className="BadgesList">
            <div className="form-group">
                <label>Filter Badges</label>
                <input
                type="text"
                className="form-control"
                value={query}
                onChange={e => {
                    setQuery(e.target.value);
                }}
                />
            </div>

            <ul className="list-unstyled">
                {
                    filteredBadges.map(badge=>{
                        return(
                            <li key={badge.id}>
                                <Link
                                    to={`/badges/${badge.id}`}
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