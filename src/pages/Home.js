import React, { useState } from "react";
import UserModal from "../components/UserModal";
import AccountModal from "../components/AccountModal";
import FruitCard from "../components/FruitCard";
import Sidebar from '../components/Sidebar';
import Logout from "../components/Logout";
import "../stylesheets/Group_main.css";
import "../stylesheets/HomeLightMode.css";
import "../stylesheets/Header_animation.css";

import { useColorMode } from 'theme-ui';
import { alpha, rotate } from '@theme-ui/color';


/** @jsxImportSource theme-ui */


function Home({ user, fruits, token, setUser, setToken, toggle, setToggle, registerClicked, setRegisterClicked, array, total, setTotal, priceList }) {
    const [colorMode, setColorMode] = useColorMode();
    const [slide, setSlide] = useState(false);
    const [list, setList] = useState([]);
    const [basketList, setBasketList] = useState([]);
    const [loginStateModal, showLoginStateModal] = useState(false);
    const [registerStateModal, showRegisterStateModal] = useState(false);
    function openLoginModal() { showLoginStateModal(true); }
    function openRegisterModal() { showRegisterStateModal(true); }
    function closeLoginModal() { showLoginStateModal(false); }
    function closeRegisterModal() { showRegisterStateModal(false); }

    const slideClass = () => {
        setSlide(!slide)
    }

    const sendBasket = () => {
        setBasketList(list)
    }

    const deleteFruit = (index) => {
        let arr = [...list]
        arr.splice(index, 1)
        setList(arr)
        setBasketList(arr)
    }

    return (
        <div className="master" sx={{
            backgroundImage: (t) => `
              linear-gradient(
                to top,
                ${alpha('primaryMaster', 0.1)(t)},
                ${alpha('secondaryMaster', 0.9)(t)}
              )
            `,
        }}>

            <div className="header_bar" sx={{
                backgroundImage: (t) => `
      linear-gradient(
        to top,
        ${alpha('primaryHead', 0.5)(t)},
        ${alpha('secondaryHead', 0.5)(t)}
      )
    `,
            }}>
                <img className="logo_img" src={require("../images/smoothie_logo_v1.png")} alt='logo' />
                <div className="sp-container">
                    <div className="sp-containerInner">
                        <h2 className="frame-1">AWESOME</h2>
                        <h2 className="frame-2">REFRESHING</h2>
                        <h2 className="frame-3">TASTEFUL</h2>
                        <h2 className="frame-4">MOIST!</h2>
                    </div>
                    <div className="sp-message">
                        <h2 className="frame-5">
                            <span>HAVE &nbsp;&nbsp;A</span>
                            <span>SMOOTH</span>
                            <span>EXPERIENCE</span>
                        </h2>
                    </div>
                </div>
                <div className="outerFlex">
                    <div className="toggleFlex">
                        <button className={slide ? 'slide' : null} sx={{ bg: 'black', color: 'white' }} id="slide" onClick={() => { setColorMode(colorMode === 'light' ? 'dark' : 'light'); slideClass() }}>
                            <div className="indicator">{colorMode === 'light' ? '🌚' : '🌝'}</div>
                        </button>

                        {!user ?
                            <div className="login" sx={{
                                backgroundImage: (t) => `
                                  linear-gradient(
                                    to bottom,
                                    ${alpha('primaryLogin', 0.5)(t)},
                                    ${alpha('secondaryLogin', 0.5)(t)}
                                  )
                                `,
                            }}>
                                <p>Log-in to create your smoothie!</p>
                                <button onClick={openLoginModal}>Login</button> <button onClick={openRegisterModal}>Register</button>
                            </div>
                            :
                            <>
                                <div className="highZ">
                                    <Sidebar basketList={basketList} array={array} total={total} setTotal={setTotal} priceList={priceList} />
                                </div>
                                <div className="login" sx={{
                                    backgroundImage: (t) => `
                                  linear-gradient(
                                    to bottom,
                                    ${alpha('primaryLogin', 0.5)(t)},
                                    ${alpha('secondaryLogin', 0.5)(t)}
                                  )
                                `,
                                }}>
                                    <p>
                                        Welcome back {user}!
                                    </p>
                                    <AccountModal token={token} />
                                    <form onSubmit={Logout} id='logout'>
                                        <button type='submit'>Logout</button>
                                    </form>

                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            <div className='offers_container' sx={{
                backgroundImage: (t) => `
                                  linear-gradient(
                                    to bottom right,
                                    ${alpha('primaryOffers', 0.5)(t)},
                                    ${alpha('secondaryOffers', 0.5)(t)}
                                  )
                                `,
            }}>

                {/* Card 1 */}
                <div className="offers offers_red">

                    <div className="desktop">
                        <img className="offerImg" src={require("../images/smoothie_offers/smoothie_red.png")} alt='Red Smoothie' />
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
                        <img className="offerImg" src={require("../images/smoothie_offers/smoothie_mixed.png")} alt='Mixed smoothie' />
                    </div>
                    <div class="mobile">
                        <null />
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
                        <img className="offerImg" src={require("../images/smoothie_offers/smoothie_yellow.png")} alt='Yellow Smoothie' />
                    </div>
                    <div class="mobile">
                        <null />
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
                        closeRegisterModal={closeRegisterModal} user={user} registerClicked={registerClicked} setRegisterClicked={setRegisterClicked} />
                    <div className='splashPage' sx={{
                        backgroundImage: (t) => `
                                  linear-gradient(
                                    to bottom left,
                                    ${alpha('primarySplash', 0.5)(t)},
                                    ${alpha('secondarySplash', 0.5)(t)}
                                  )
                                `,
                    }}>
                        <div className='innerCont'>
                            <div className="container_headers"><p>🡗 SCRATCH & SNIFF 🡖</p>
                            </div>
                            <div className='animationFront'>
                            </div>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className='selectionCont' sx={{ bg: 'price' }}>
                        <div className='innerCont'>
                            <div className="container_headers" sx={{ bg: 'containerHeader' }}>
                                <p>Click the ingredient to build your smoothie:</p>
                            </div>
                            <div className='selectionBoxes'>
                                {fruits?.length > 0 ? (
                                    <div>
                                        {fruits.map((fruit, index) => (
                                            <FruitCard fruit={fruit} array={array} list={list} setList={setList} key={index} />
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
                            <div className="container_headers" sx={{ bg: 'containerHeader' }}>
                                <p>Your smoothie:</p>
                            </div>
                            <div className='selectionBoxes'>
                                {list?.length > 0 ? (
                                    <div id="outerSelected">
                                        <div className="selectedCSS">
                                            {list?.map((paired, index) => (
                                                <p key={index}>{paired.name}&nbsp;&nbsp;&nbsp;&nbsp;
                                                    £{paired.price}
                                                    <button onClick={() => deleteFruit(index)} className="delete">☠</button>
                                                </p>
                                            ))}

                                        </div>
                                        <button id="addToBasket" onClick={sendBasket}>+🛒</button>
                                    </div>
                                ) : (
                                    <div className="selectedCSS">
                                        <h1>No ingredients selected!</h1>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Home
