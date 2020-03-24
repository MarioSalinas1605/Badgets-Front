import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList.jsx'
import PageError from './PageError.jsx'
import PageLoading from './PageLoading.jsx'
import './styles/Badges.scss'
import api from '../api'

function Badges() {
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(null)
    let [data, setData] = useState()

    async function fetchData() {
        setLoading(true)
        setError(null)

        try {
            const serverResponse = await api.badges.list()
            setData(serverResponse)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    useEffect(()=>{
        fetchData()
    }, []);

    
    
    if (loading === true) {
        return <PageLoading />
    }
  
    if (error) {
        return <PageError error={error} />
    }
    
    return(
        <>
            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <img 
                            className="Badges__conf-logo"
                            src={confLogo} 
                            alt="Conf logo"
                        />
                    </div>
                </div>
            </div>

            <div className="Badges__container">
                <div className="Badges__buttons">
                    <Link to="/badges/new" className="btn btn-primary">
                        New Badge
                    </Link>
                </div>

                <BadgesList badges={data}/>
            </div>
        </>
    )
}

export default Badges