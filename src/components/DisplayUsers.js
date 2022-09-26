import React from 'react';
import { useState } from "react";
import { displayUsers } from '../utils';

const DisplayUsers = ({ wide, setWide }) => {
    const [usernames, setUsernames] = useState([])
    const [toggle, setToggle] = useState(false);
    const loadUsernames = async (event) => {
        event.preventDefault()
        let users = await displayUsers()
        setUsernames(users)
    }

    return (
        <form onSubmit={loadUsernames} className='outerUserList'>
            <button type='submit' onClick={() => { setWide(!wide); setToggle(!toggle) }} className="userButt">DISPLAY ALL USERS</button>
            <div className={toggle ? "showUser" : "hideUser"}>
                <div className="userList">
                    {usernames?.map((user, index) => (
                        <h1 key={index}>{user}</h1>
                    ))}
                </div>
            </div>
        </form>
    )
}
export default DisplayUsers
