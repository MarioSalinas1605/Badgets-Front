import React from 'react'

function BadgeForm(props) {
    
    return (
        <>
            <h1>New attendant</h1>
            <form onSubmit={props.onSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input 
                        type="text" 
                        name="firstName"
                        className="form-control"
                        value={props.formValues && props.formValues.firstName ? props.formValues.firstName : ''}
                        onChange={props.onChange}
                    />
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        value={props.formValues && props.formValues.lastName ? props.formValues.lastName : ''}
                        onChange={props.onChange}
                    />
                    <label>Email</label>
                    <input 
                        type="text"
                        name="email"
                        className="form-control"
                        value={props.formValues && props.formValues.email ? props.formValues.email : ''}
                        onChange={props.onChange}
                    />
                    <label>Job Title</label>
                    <input
                        type="text"
                        name="jobTitle"
                        className="form-control"
                        value={props.formValues && props.formValues.jobTitle ? props.formValues.jobTitle : ''}
                        onChange={props.onChange}
                    />
                    <label>Twitter</label>
                    <input
                        type="text"
                        name="twitter"
                        className="form-control"
                        value={props.formValues && props.formValues.twitter ? props.formValues.twitter : ''}
                        onChange={props.onChange}
                    />
                </div>

                <button className="btn btn-primary">
                        Save
                </button>

                {props.error && (
                    <p className="text-danger">{props.error.message}</p>
                )}
            </form>
        </>
    )
}

export default BadgeForm