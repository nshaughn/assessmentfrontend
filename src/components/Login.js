import React from 'react'
import { useState } from "react";
import { login } from '../utils';

const Login = ({ setter }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        console.log("!!!!!")
        await login(email, password, setter)
    }


    return (
        <form onSubmit={submitHandler} className="formStyle" id="loginModal">
            <div>
                <input onChange={(event) => setEmail(event.target.value)} placeholder="email" />
                <br></br>
                <input onChange={(event) => setPassword(event.target.value)} className="alignSelf" placeholder="password" type="password" />
                <br></br>
            </div>
            <div>
                <button type='submit'>LOGIN</button>
            </div>
        </form>
    )
}

export default Login
