import React, { useState, useEffect } from "react";
import UserModal from "../components/UserModal";
import AccountModal from "../components/AccountModal";
import FruitCard from "../components/FruitCard";
import Sidebar from '../components/Sidebar';
import "../stylesheets/Group_main.css";

function Home({ user, fruits, token, setUser, setToken, toggle, setToggle }) {
    const [loginStateModal, showLoginStateModal] = useState(false)
    const [registerStateModal, showRegisterStateModal] = useState(false)
    function openLoginModal() { showLoginStateModal(true); }
    function openRegisterModal() { showRegisterStateModal(true); }
    function closeLoginModal() { showLoginStateModal(false); }
    function closeRegisterModal() { showRegisterStateModal(false); }

    return (

        <div className="master">
            <div className="header_bar">
                <img className="logo_img" src={require("../images/smoothie_logo_v1.png")} alt='logo' />
                <div className="highZ">
                    <Sidebar />
                </div>
                {!user ?
                    <div className="login">
                        <p>Log-in to create your smoothie!</p>
                        <a onClick={openLoginModal}>Login</a> <a onClick={openRegisterModal}>Register</a>
                    </div>

                    :

                    <div className="login"><p>Welcome, {user}! </p>
                        <AccountModal token={token} />
                    </div>}
            </div>

            <div className='offers_container'>

                <div className='offers'>
                    <h1>Special Offer</h1>
                    <div className='imgCont'>
                        <img className="smoothie_image" src={require("../images/smoothie_logo_v1.png")} alt='logo' />
                    </div>
                </div>

                <div className='offers'>
                    <h1>Special Offer</h1>
                    <div className='imgCont'>
                        <img className="smoothie_image" src={require("../images/smoothie_logo_v1.png")} alt='logo' />
                    </div>
                </div>

                <div className='offers'>
                    <h1>Special Offer</h1>
                    <div className='imgCont'>
                        <img className="smoothie_image" src={require("../images/smoothie_logo_v1.png")} alt='logo' />
                    </div>
                </div>
            </div>
            {!user ?
                <>
                    <UserModal setter={setUser} setToken={setToken} toggle={toggle} setToggle={setToggle} loginStateModal={loginStateModal}
                        registerStateModal={registerStateModal} showRegisterStateModal={showRegisterStateModal} closeLoginModal={closeLoginModal}
                        closeRegisterModal={closeRegisterModal} />
                    <div className='splashPage'>
                        <div className='innerCont'>
                            <div className="container_headers"><p>🡗 SCRATCH & SNIFF 🡖</p></div>
                            <div className='animationFront'>
                            </div>
                        </div>
                    </div>
                </>
                :
                <>

                    <div className='selectionCont'>
                        <div className='innerCont'>
                            <div className="container_headers"><p>Click the ingredient to build your smoothie:</p></div>
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
                        </div>
                        <div className='innerCont'>
                            <div className="container_headers"><p>Your smoothie:</p></div>
                            <div className='selectionBoxes'>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                </>}
        </div>

    )
}

export default Home