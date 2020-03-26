import React, { useState, useEffect} from 'react'
import api from '../api'
import PageLoading from './PageLoading'
import PageError from './PageError'
import confLogo from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import { Link } from 'react-router-dom'
import './styles/BadgesDetails.scss'

function BadgeDetails(props) {

    const [ badge, setBadge ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        twitter: '',
        jobTitle: ''
    })
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)

    async function fetchData () {
        setError(null)
        setLoading(true)
        try {
            const data = await api.badges.read(props.match.params.badgeId)
            setBadge(data)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [])

    if (loading) {
        return <PageLoading />
    }

    if (error) {
        return <PageError />
    }

    return (
        <>
            <div className="BadgesDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la conferencia"/>
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName|| ''} {badge.lastName || ''}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge 
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            email={badge.email}
                            twitter={badge.twitter}
                            jobTitle={badge.jobTitle}
                        />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <Link
                                className="btn btn-primary mb-4"
                                to={`/badges/${badge.id}/edit`}
                            >
                                Edit
                            </Link>
                        </div>
                        <div>
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default BadgeDetails