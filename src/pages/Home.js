import React, { useState, useEffect } from "react";
import UserModal from "../components/UserModal";
import AccountModal from "../components/AccountModal";
import FruitCard from "../components/FruitCard";
import Sidebar from '../components/Sidebar';
import Logout from "../components/Logout";
import "../stylesheets/Group_main.css";

function Home({ user, fruits, token, setUser, setToken, toggle, setToggle }) {
    const [list, setList] = useState([])
    const [loginStateModal, showLoginStateModal] = useState(false)
    const [registerStateModal, showRegisterStateModal] = useState(false)
    function openLoginModal() { showLoginStateModal(true); }
    function openRegisterModal() { showRegisterStateModal(true); }
    function closeLoginModal() { showLoginStateModal(false); }
    function closeRegisterModal() { showRegisterStateModal(false); }

    // const logout = async () => {
    //     let name = 'jwt_token'
    //     document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    //   }

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

                    <div className="login">
                        <p id='welcome'>
                            Welcome, {user}! 
                        </p>
                        <AccountModal token={token} />
                        <form onSubmit={Logout} id='logout'>
                            <button type='submit'>Logout</button>
                        </form>
                        
                    </div>}
            </div>

            <div className='offers_container'>

                {/* Card 1 */}
                <div className="offers offers_red">
                    <div class="desktop">
                        <img src={require("../images/smoothie_offers/smoothie_red.png")} alt='Red Smoothie' />
                    </div>
                    <div class="mobile">
                        <null/>
                    </div>
                        
                        <div className="ingredients">
                            <h1>Red Special Offer</h1>
                            <p>Red apple</p>
                            <p>Lychee</p>
                            <p>Strawberry</p>
                            <div className="price"><p>Remarkable price! Only £12</p></div>
                        </div>
                </div>


                
                {/* Card 2 */}
                <div className='offers offers_mixed'>
                    <div class="desktop">
                        <img src={require("../images/smoothie_offers/smoothie_mixed.png")} alt='Mixed smoothie' />
                    </div>
                    <div class="mobile">
                        <null/>
                    </div>
                        <div className="ingredients">
                            <h1>Mixed Special Offer</h1>
                            <p>Green Apple</p>
                            <p>Banana</p>
                            <p>Watermelon</p>
                            <div className="price"><p>Remarkable price! Only £12</p></div>
                        </div>

                </div>
                
                
                {/* Card 3 */}
                <div className='offers offers_yellow'>
                <div class="desktop">
                    <img src={require("../images/smoothie_offers/smoothie_yellow.png")} alt='Yellow Smoothie' />  
                </div>
                <div class="mobile">
                    <null/>
                </div>
                        <div className="ingredients">
                            <h1>Yellow Special Offer</h1>
                            <p>Apricot</p>
                            <p>Lemon</p>
                            <p>Orange</p>
                            <div className="price"><p>Remarkable price! Only £12</p></div>
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
                            <div className="container_headers">
                                <p>Click the ingredient to build your smoothie:</p>                            
                            </div>
                            <div className='selectionBoxes'>
                                {fruits?.length > 0 ? (
                                    <div>
                                        {fruits.map((fruit, index) => (
                                            <FruitCard fruit={fruit} list={list} setList={setList} key={index} />
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
                            <div className="container_headers">
                                <p>Your smoothie:</p>
                            </div>
                            <div className='selectionBoxes'>
                                {list?.length > 0 ? (
                                    <div className="selectedCSS">
                                        {list?.map((name, index) => (
                                            <p key={index}>{name}</p>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="selectedCSS">
                                        <h1>No ingredients selected!</h1>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>}
        </div>

    )
}

export default Home