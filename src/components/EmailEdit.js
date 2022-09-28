import React from 'react' 
import { useState } from "react";
import { editEmail } from '../utils';
import { getCookie } from '../common';

const EmailEdit = () => {
    const [email, setEmail] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        let token = getCookie("jwt_token")
        await editEmail(token, email)
    }

    return (
        <form onSubmit ={submitHandler} className="rowMe">
            <label> Update email:<br></br>
                <input className="userInput" onChange={(event) => setEmail(event.target.value)}
                placeholder='enter new email' />
            </label>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default EmailEdit
