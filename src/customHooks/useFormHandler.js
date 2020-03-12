import { useState } from 'react';

function useFormHandler (callback) {
    const [inputs, setInputs] = useState({});

    function handleSubmit (event) {
        if (event) {
            event.preventDefault();
        }
        callback();
    }

    function handleInputChange (event) {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }
    
    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
}
export default useFormHandler;