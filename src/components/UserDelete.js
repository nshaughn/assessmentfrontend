import React from 'react' 
import { useState } from "react";
import { deleteAccount } from '../utils';
import { getCookie } from '../common';

const AccountDelete = () => {
    const [confirm, setConfirm] = useState(false)

    const submitHandler = async () => {
        let token = getCookie("jwt_token")
        if(confirm){
            await deleteAccount(token)
        }
    }
    
    const confirmation = async (val) => {
        if(val.target.value === 'DELETE'){
            await setConfirm(true)
        } else {
            console.log('not confirmed')
        }
    }

    return (
        <form onSubmit ={submitHandler} className="rowMe">
            <label> Delete your account:<br></br>
                <input className="userInput" onChange={confirmation}
                placeholder='type "DELETE" to confirm' />
            </label>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AccountDelete
