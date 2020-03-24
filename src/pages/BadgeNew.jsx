import React, { useState } from 'react'
import Badge from '../components/Badge.jsx'
import header from '../images/platziconf-logo.svg'
import BadgeForm from '../components/BadgeForm.jsx'
import useFormHandler from '../customHooks/useFormHandler'
import './styles/BadgeNew.scss'
import api from '../api'

function BadgeNew() {

    const {inputs, handleInputChange, handleSubmit} = useFormHandler(onSubmitHandler)
    
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)

    async function onSubmitHandler (e) {
        console.log(inputs);
        setLoading(true)
        setError(null)
        try {
            await api.badges.create(inputs)
            setLoading(false)
        } catch (error) {
            setLoading(error)
            setError(error)
        }
        
    }

    return (
        <>
            <div className="BadgeNew__hero">
                <img 
                    className="BadgeNew__hero-image img-fluid"
                    src={header} 
                    alt="Logo"
                />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge
                            firstName={ inputs.firstName || 'FIRST_NAME' }
                            lastName={ inputs.lastName || 'LAST_NAME' }
                            twitter={ inputs.twitter || 'EMAIL' }
                            jobTitle={ inputs.jobTitle || 'JOB_TITLE' }
                            email={ inputs.email || 'TWITTER' }
                            avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                        />
                    </div>
                    <div className="col-6">
                        <BadgeForm
                            onChange={ handleInputChange }
                            formValues={ inputs }
                            onSubmit={ handleSubmit }
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BadgeNew