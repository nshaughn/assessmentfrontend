import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import * as AiIcons from "react-icons/ai";
// import * as TbIcons from "react-icons/tb";
import { Link } from 'react-router-dom';
// import SideBarCheckout from './SideBarCheckout';

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
                                {/* <div> */}
                                    <h1 className='h1Text'>Basket</h1>
                                {/* </div> */}
                                <div className="addedCont">
                                    {basketList?.length > 0 ? (
                                        <div className="addedItems">
                                            {basketList?.map((name, index) => (
                                                <p key={index}>{name}</p>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="addedItems">
                                            <h1>Basket is empty!</h1>
                                        </div>
                                    )}
                                </div>
                                {/* <p className="runningTotal">£{total}</p> */}
                                {/* <Link to="/checkout"> */}
                                <div>
                                    <button className="sendCheckout">Checkout</button>
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