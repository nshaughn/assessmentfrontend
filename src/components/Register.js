import React from 'react' 
import { useState } from "react";
import { register } from '../utils';

const Register = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await register(name, email, password)
    }

    return (
        <form onSubmit ={submitHandler} className="formStyle">
                <input onChange={(event) => setName(event.target.value)} placeholder="name"/>
            <br></br>
                <input onChange={(event) => setEmail(event.target.value)} placeholder="email"/>
            <br></br>
                <input onChange={(event) => setPassword(event.target.value)} placeholder="password"/>
            <br></br>
            <button type='submit'>REGISTER</button>
        </form>
    )
}

export default Register