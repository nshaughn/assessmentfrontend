import React from 'react' 
import { useState } from "react";
import { deleteAccount } from '../utils';

const AccountDelete = ({token}) => {
    const [confirm, setConfirm] = useState(false)

    const submitHandler = async (event) => {
        event.preventDefault()
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
                <input onChange={confirmation}
                placeholder='type "DELETE" to confirm' />
            </label>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AccountDelete