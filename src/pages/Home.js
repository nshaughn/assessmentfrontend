import React, { useState, useEffect } from "react";
import UserModal from "../components/UserModal";
import AccountModal from "../components/AccountModal";
import FruitCard from "../components/FruitCard";
import Sidebar from '../components/Sidebar';
import "../stylesheets/kurtiscss_main.css";

function Home({ user, fruits, token, setUser, setToken, toggle, setToggle }) {
    const [loginStateModal, showLoginStateModal] = useState(false)
    const [registerStateModal, showRegisterStateModal] = useState(false)
    function openLoginModal() { showLoginStateModal(true); }
    function openRegisterModal() { showRegisterStateModal(true); }
    function closeLoginModal() { showLoginStateModal(false); }
    function closeRegisterModal() { showRegisterStateModal(false); }
    return (
        <div>
            <div className="master">
                <div className="header_bar">
                    <img className="logo_img" src={require("../images/smoothie_logo_v1.png")} alt='logo' />
                        <div className="highZ">
                            <Sidebar />
                        </div>
                    {!user ?<div className="login"><a onClick={openLoginModal}>Login</a> <a onClick={openRegisterModal}>Register</a></div>:''}
                </div>
                <h1 className="title">Smooth(ie) API</h1>
                {!user ?
                    <>
                        <UserModal setter={setUser} setToken={setToken} toggle={toggle} setToggle={setToggle} loginStateModal={loginStateModal} 
                        registerStateModal={registerStateModal} showRegisterStateModal={showRegisterStateModal} closeLoginModal={closeLoginModal} 
                        closeRegisterModal={closeRegisterModal} />
                        <h2>log-in to create your smoothie!</h2>
                        <div>
                        </div>
                    </>
                    :
                    <>
                        <h2>User: {user} is logged in</h2>
                        <div className='selectionCont'>
                            <div className='selectionBoxes'>
                                {fruits?.length > 0 ? (
                                    <div>
                                        {fruits.map((fruit) => (
                                            <FruitCard fruit={fruit} />
                                        ))}
                                    </div>
                                ) : (
                                    <div>
                                        <h1>NO FRUIT!!!!!!!!</h1>
                                    </div>
                                )}
                            </div>
                            <div className='selectionBoxes'>

                            </div>
                        </div>
                        <div className="navDiv">
                            <div id="manageNav">
                                <AccountModal token={token} />
                            </div>
                        </div>
                    </>}
            </div>
        </div>
    )
}

export default Home