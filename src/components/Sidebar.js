import React, { useEffect,useState } from 'react';
import styled from 'styled-components'
import * as AiIcons from "react-icons/ai";
// import * as TbIcons from "react-icons/tb";
import { Link } from 'react-router-dom';
// import SideBarCheckout from './SideBarCheckout';

import "../stylesheets/Sidebar.css"

function Sidebar({})
{
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    // useEffect(()=> {
    //     let sum = 0
    //     for (let i = 0; i < checkOut.length; i++){
    //         sum += Number(checkOut[i].smoothiePrice)
    //     }
    //     setTotal(sum.toFixed(2))
    // }, [checkOut,setTotal])

    // function removeItem (index) {
    //     for (let i = 0; i < checkOut.length; i++) {
    //         if(checkOut[i].catId === index.catId){
    //             let removeSmoothieFromCart = [...checkOut];
    //             removeSmoothieFromCart.splice(i, 1)
    //             setCheckOut(removeSmoothieFromCart)
    //         } 
    //     }    
    // }
    
            return (
        <>
        <div className={sidebar ? 'fixMeDaddy somethingElse' : 'fixMeDaddy'}>
            <button className="basket" onClick={showSidebar}>
                        <BasketDiv>
                            {/* Checkout Basket&nbsp;&nbsp; */}
                            <AiIcons.AiOutlineShoppingCart className='cart-icon'/>
                        </BasketDiv>
            </button>
        </div>
        <div className={sidebar ? 'sideBar active' : 'sideBar'}>
            <nav className='side-menu'>
                <ul className='side-menu-items'>
                    <li className='sidebar-toggle'>
                    </li>
                        <div>
                            <div className="basketContents">
                                <h1 className='h1Text'>Basket</h1>
                                {/* {checkOut.map((checkOutList, index) =>
                                {
                                    return (
                                        <div className="polaroidStyle" key={index}>
                                            <p className="caption">Your smoothie:<br></br>{checkOutList}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;£{checkOutList.catPrice}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <TbIcons.TbTrashX className='trashIcon' onClick={()=>removeItem(checkOutList, index)}/></p>
                                        </div>
                                        );
                                    })} */}
                            </div>
                            {/* <p className="runningTotal">£{total}</p> */}
                            {/* <Link to="/checkout"> */}
                                <button className="sendCheckout">Checkout</button>
                            {/* </Link> */}
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