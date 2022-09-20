import React from 'react' 
import { useState } from "react";
import { editName } from '../utils';

const NameEdit = ({token}) => {
    const [name, setName] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await editName(token, name)
    }

    return (
        <form onSubmit ={submitHandler} className="rowMe">
            <label> Update name:<br></br>
                <input onChange={(event) => setName(event.target.value)}
                placeholder='enter new name' />
            </label>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default NameEdit