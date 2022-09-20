import React from 'react' 
import { useState } from "react";
import { editEmail } from '../utils';

const EmailEdit = ({token}) => {
    const [email, setEmail] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await editEmail(token, email)
    }

    return (
        <form onSubmit ={submitHandler} className="rowMe">
            <label> Update email:<br></br>
                <input onChange={(event) => setEmail(event.target.value)}
                placeholder='enter new email' />
            </label>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default EmailEdit