import React from 'react'
import useFormHandler from '../customHooks/useFormHandler'

function BadgeForm() {

    function onSubmitHandler () {
        console.log(inputs);
    }
    
    const {inputs, handleInputChange, handleSubmit} = useFormHandler(onSubmitHandler)

    return (
        <>
            <h1>New attendant</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input 
                        type="text" 
                        name="firstName"
                        className="form-control"
                        value={inputs.firstName || ''}
                        onChange={handleInputChange}
                    />
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        value={inputs.lastName || ''}
                        onChange={handleInputChange}
                    />
                    <label>Email</label>
                    <input 
                        type="text"
                        name="email"
                        className="form-control"
                        value={inputs.email || ''}
                        onChange={handleInputChange}
                    />
                    <label>Job Title</label>
                    <input
                        type="text"
                        name="jobTitle"
                        className="form-control"
                        value={inputs.jobTitle || ''}
                        onChange={handleInputChange}
                    />
                    <label>Twitter</label>
                    <input
                        type="text"
                        name="twitter"
                        className="form-control"
                        value={inputs.twitter || ''}
                        onChange={handleInputChange}
                    />
                </div>

                <button className="btn btn-primary">
                        Save
                </button>
            </form>
        </>
    )
}

export default BadgeForm