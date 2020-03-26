import React, { useEffect, useState } from 'react'
import PageLoading from './PageLoading.jsx'
import Badge from '../components/Badge.jsx'
import api from '../api'
import header from '../images/platziconf-logo.svg'
import BadgeForm from '../components/BadgeForm.jsx'
import './styles/BadgeEdit.scss'

function BadgeEdit (props) {

    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const [ form , setForm ] = useState({});

    useEffect(()=>{
        fetchData()
    }, [])

    async function fetchData () {
        setLoading(true)
        setError(null)
        try {
            const data = await api.badges.read( props.match.params.badgeId )
            setLoading(false)
            setForm(data)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    async function handleSubmit (event) {
        console.log(form);
        if (event) {
            event.preventDefault();
        }
        setLoading(true)
        setError(null)
        try {
            await api.badges.update(props.match.params.badgeId, form)
            setLoading(false)
            props.history.push('/badges')
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    function handleChange (event) {
        event.persist();
        setForm(form => ({ ...form, [event.target.name]: event.target.value }));
    }

    if ( loading ) {
        return <PageLoading />
    }

    return (
        <>
            <div className="BadgeEdit__hero">
                <img 
                    className="img-fluid BadgeEdit__hero-image"
                    src={header} 
                    alt="Logo"
                />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge
                            firstName={ form.firstName || 'FIRST_NAME' }
                            lastName={ form.lastName || 'LAST_NAME' }
                            twitter={ form.twitter || 'twitter' }
                            jobTitle={ form.jobTitle || 'JOB_TITLE' }
                            email={ form.email || 'EMAIL' }
                            avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                        />
                    </div>
                    <div className="col-6">
                        <h1>Edit Attendant</h1>
                        <BadgeForm
                            onChange={ handleChange }
                            onSubmit={ handleSubmit }
                            formValues={ form }
                            error={ error }
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BadgeEdit