import React from 'react'

function BadgeForm() {

    function handleChange(e) {
        console.log({
            name: e.target.name,
            value: e.target.value,
        });
    }

    function handleClick(e) {
        console.log('Button was clicked');
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Form was submitted');
    }


    return(
        <>
            <h1>New attendant</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input 
                        type="text" 
                        name="firstName"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>

                <button 
                    className="btn btn-primary" 
                    onClick={handleClick}
                >
                        Save
                </button>
            </form>
        </>
    )
}

export default BadgeForm