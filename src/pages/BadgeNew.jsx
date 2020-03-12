import React from 'react'
import Badge from '../components/Badge.jsx'
import Navbar from '../components/Navbar.jsx'
import header from '../images/badge-header.svg'
import BadgeForm from '../components/BadgeForm.jsx'
import useFormHandler from '../customHooks/useFormHandler'
import './styles/BadgeNew.scss'

function BadgeNew() {

    function onSubmitHandler () {
        console.log(inputs);
    }
    
    const {inputs, handleInputChange, handleSubmit} = useFormHandler(onSubmitHandler)

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
                    <div className="col-6">
                        <Badge
                            firstName={inputs.firstName}
                            lastName={inputs.lastName}
                            twitter={inputs.twitter}
                            jobTitle={inputs.jobTitle}
                            avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                        />
                    </div>
                    <div className="col-6">
                        <BadgeForm
                            onChange={handleInputChange}
                            formValues={inputs}
                            onSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BadgeNew