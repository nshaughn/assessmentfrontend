import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import * as AiIcons from "react-icons/ai";
// import * as TbIcons from "react-icons/tb";
import { Link } from 'react-router-dom';
// import SideBarCheckout from './SideBarCheckout';
import Checkout from '../pages/Checkout';

import "../stylesheets/Sidebar.css"

function Sidebar({ basketList, total, setTotal, checkOut }) {
    // const [checkoutTotal, setCheckoutTotal] = setState([])
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    // const makePriceList = () => {
    //     basketList?.map((paired) => (
    //         priceList.push(paired.price)
    //     ))
    //     console.log(priceList)
    // }

    // let checkoutArray = []

    // const sendTotal = () => {
    //     checkoutArray.push(total)
    //     console.log(checkoutArray)
    // }

    // useEffect(() => {
    //     makePriceList()
    //     for (let i = 0; i < priceList.length; i++) {
    //         console.log('sidebar!!!', priceList[i])
    //         sum += priceList[i]
    //     }
    //     setTotal(sum.toFixed(2))
    // }, [])

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
                                <Link to="/checkout">
                                <div>
                                    {/* <button className="sendCheckout">Checkout</button> */}

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
//     return (
//         <>
//             <div className={sidebar ? 'fixMeDaddy somethingElse' : 'fixMeDaddy'}>
//                 <button className="basket" onClick={showSidebar}>
//                     <BasketDiv>
//                         {/* Checkout Basket&nbsp;&nbsp; */}
//                         <AiIcons.AiOutlineShoppingCart className='cart-icon' />
//                     </BasketDiv>
//                 </button>
//             </div>
//             <div className={sidebar ? 'sideBar active' : 'sideBar'}>
//                 <nav className='side-menu'>
//                     <ul className='side-menu-items'>
//                         <li className='sidebar-toggle'>
//                         </li>
//                         <div className="makeFit">
//                             <div className="outerBasket">
//                                 <h1 className='h1Text'>Basket</h1>
//                                 <div className="addedCont">
//                                     {basketList?.length > 0 ? (
//                                         <div className="sizeBox">
//                                             <div className="yourSmoothie">
//                                                 <p>YOUR<br />SMOOTHIE:</p>
//                                             </div>
//                                             <div className="addedItems fillBasket">
//                                                 {basketList?.map((paired, index) => (
//                                                     <p key={index}>{paired.name} £{paired.price}</p>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     ) : (
//                                         <div className="sizeBox">
//                                             <div className="yourSmoothie">
//                                                 <p>C'MON,<br />CHOOSE!</p>
//                                             </div>
//                                             <div className="addedItems emptyBasket">
//                                                 <p>BASKET<br />IS<br />EMPTY!</p>
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>
//                                 {/* <p className="runningTotal">£{total}</p> */}
//                                 <Link to="/checkout" total={total}>
//                                 <div>
//                                     {/* <button className="sendCheckout">Checkout</button> */}

//                                     <form onSubmit={Checkout}>
//                                         <button onClick={sendTotal} className="sendCheckout" type='submit'>Total: £{total} Checkout</button>
//                                     </form>

//                                 </div>
//                                 </Link>
//                             </div>
//                         </div>
//                     </ul>
//                 </nav>
//             </div>
//         </>
//     )
// }


export default Sidebar

const BasketDiv = styled.div`
    display: flex;
    align-items: center;
`
