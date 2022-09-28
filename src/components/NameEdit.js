import React from 'react' 
import { useState } from "react";
import { editName } from '../utils';
import { getCookie } from '../common';

const NameEdit = () => {
    const [name, setName] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        let token = getCookie("jwt_token")
        await editName(token, name)
    }

    return (
        <form onSubmit ={submitHandler} className="rowMe">
            <label> Update name:<br></br>
                <input className="userInput" onChange={(event) => setName(event.target.value)}
                placeholder='enter new name' />
            </label>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default NameEdit
