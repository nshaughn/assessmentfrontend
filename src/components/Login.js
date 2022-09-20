import React from 'react' 
import { useState } from "react";
import { login } from '../utils';

const Login = ({setter, setToken}) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        let token = await login(email, password, setter)
        setToken(token)
    }

    return (
        <form onSubmit ={submitHandler} className="formStyle">
                <input onChange={(event) => setEmail(event.target.value)} placeholder="email"/>
            <br></br>
                <input onChange={(event) => setPassword(event.target.value)} placeholder="password"/>
            <br></br>
            <button type='submit'>LOGIN</button>
        </form>
    )
}

export default Login