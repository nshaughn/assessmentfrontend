import React from 'react'
import { useState } from "react";
import { editPassword } from '../utils';
import { getCookie } from '../common';

const PasswordEdit = () => {
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        let token = getCookie("jwt_token")
        await editPassword(token, password)
    }

    return (
        <form onSubmit={submitHandler} className="rowMe">
            <label> Update password:<br></br>
                <input className="userInput" onChange={(event) => setPassword(event.target.value)}
                placeholder='enter new password' type="password" />
            </label>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default PasswordEdit
