import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import Checkout from '../pages/Checkout';

import "../stylesheets/Sidebar.css"

function Sidebar({ total, setTotal, checkOut }) {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    useEffect(()=> {
        let sum = 0
        for (let i = 0; i < checkOut.length; i++){
            sum += Number(checkOut[i].price)
        }
        setTotal(sum.toFixed(2))
    }, [checkOut,setTotal])

    return (
        <>
            <div className={sidebar ? 'fixMeDaddy somethingElse' : 'fixMeDaddy'}>
                <button className="basket" onClick={showSidebar}>
                    <BasketDiv>
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
                                    {checkOut?.length > 0 ? (
                                        <div className="sizeBox">
                                            <div className="yourSmoothie">
                                                <p>YOUR<br />SMOOTHIE:</p>
                                            </div>
                                            <div className="addedItems fillBasket">
                                                {checkOut?.map((checkOutList, index) => {
                                                    return (
                                                    <p key={index}>{checkOutList.name} £{checkOutList.price}</p>
                                                    )
                                                })}
                                            </div>
                                                <p>F5 TO EMPTY</p>
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
                                <Link to="/checkout">
                                <div>
                                    <form onSubmit={Checkout}>
                                        <button className="sendCheckout" type='submit'>Total: £{total} Checkout</button>
                                    </form>

                                </div>
                                </Link>
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
