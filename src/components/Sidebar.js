import React, { useState } from 'react';
import styled from 'styled-components'
import * as AiIcons from "react-icons/ai";
// import * as TbIcons from "react-icons/tb";
// import { Link } from 'react-router-dom';
// import SideBarCheckout from './SideBarCheckout';
import Checkout from '../pages/Checkout';

import "../stylesheets/Sidebar.css"

function Sidebar({ basketList }) {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className={sidebar ? 'fixMeDaddy somethingElse' : 'fixMeDaddy'}>
                <button className="basket" onClick={showSidebar}>
                    <BasketDiv>
                        {/* Checkout Basket&nbsp;&nbsp; */}
                        <AiIcons.AiOutlineShoppingCart className='cart-icon' />
                    </BasketDiv>
                </button>
            </div>
            <div className={sidebar ? 'sideBar active' : 'sideBar'}>
                <nav className='side-menu'>
                    <ul className='side-menu-items'>
                        <li className='sidebar-toggle'>
                        </li>
                        <div className="makeFit">
                            <div className="outerBasket">
                                <h1 className='h1Text'>Basket</h1>
                                <div className="addedCont">
                                    {basketList?.length > 0 ? (
                                        <div className="sizeBox">
                                            <div className="yourSmoothie">
                                                <p>YOUR<br />SMOOTHIE:</p>
                                            </div>
                                            <div className="addedItems fillBasket">
                                                {basketList?.map((name, index) => (
                                                    <p key={index}>{name}</p>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="sizeBox">
                                            <div className="yourSmoothie">
                                                <p>C'MON,<br />CHOOSE!</p>
                                            </div>
                                            <div className="addedItems emptyBasket">
                                                <p>BASKET<br />IS<br />EMPTY!</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* <p className="runningTotal">£{total}</p> */}
                                {/* <Link to="/checkout"> */}
                                <div>
                                    {/* <button className="sendCheckout">Checkout</button> */}

                                    <form onSubmit={Checkout}>
                                        <button className="sendCheckout" type='submit'>Checkout</button>
                                    </form>

                                </div>
                                {/* </Link> */}
                            </div>
                        </div>
                    </ul>
                </nav>
            </div>
        </>
    )
}


export default Sidebar

const BasketDiv = styled.div`
    display: flex;
    align-items: center;
`
