// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom';
// import * as TbIcons from "react-icons/tb";
// import styled from 'styled-components';
// import img from '../buttonBack.png';

// function Checkout({ checkOut, setCheckOut, total, setTotal}) {
// 	function removeItem (index) {
//         for (let i = 0; i < checkOut.length; i++) {
//             if(checkOut[i].catId === index.catId){
//                 let removeCatFromCart = [...checkOut];
//                 removeCatFromCart.splice(i, 1)
//                 setCheckOut(removeCatFromCart)
//             } 
//         }    
//     }

// 	useEffect(()=> {
//         let sum = 0
//         for (let i = 0; i < checkOut.length; i++){
//             sum += Number(checkOut[i].catPrice)
//         }
//         setTotal(sum.toFixed(2))
//     }, [checkOut,setTotal])

// 	return (
// 	<div className="container">
// 		<div className="upper">
// 			<div className="top">
// 				<div>
// 					<Link to="/">
// 						<button className="basket fixMeDaddy">Back</button>
// 					</Link>
// 				</div>
// 			</div>
// 			<div className="title">
// 				Checkout
// 			</div>
// 		</div>
// 		<SpecialWrapper>
// 			<SpecialDiv >
// 				<ArrayDiv>			
// 					{checkOut.map((checkOutList, index) =>{
// 					return (
// 						<PolaroidDiv key={index}>
// 							<SpecialImg  src={checkOutList.catImage} alt='cat'/>
// 							<p className="caption">{checkOutList.catName}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;£{checkOutList.catPrice}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
// 							<TbIcons.TbTrashX className='trashIcon' onClick={()=>removeItem(checkOutList, index)} /></p>
// 						</PolaroidDiv>
// 						);
// 					})}
// 				</ArrayDiv>
// 				<TotalDiv>
// 					<SpecialButton className="runningTotal">£{total}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;Buy</SpecialButton>
// 				</TotalDiv>
// 			</SpecialDiv>
// 		</SpecialWrapper>
// 	</div>
//   )
// }

// export default Checkout

// const SpecialWrapper = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: space-around;
// 	height: 100%;
// 	width: 100%;
// 	overflow: hidden;
// `

// const SpecialDiv = styled.div`
// 	// margin-top: 1em;
//     // margin-bottom: 1em;
//     padding-top: 1em;
//     height: 95%;
// 	width: 90%;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-evenly;
// 	align-items: center;
// 	background-color: rgba(0, 0, 0, 0.561);
	
// `
// const ArrayDiv = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	flex-direction: row;
// 	flex-wrap: wrap;
// 	height: 90%;
// 	width: 90%;
// 	overflow-y:auto;
// 	&::-webkit-scrollbar {
// 		width: 20px;
// 	}
// 	&::-webkit-scrollbar-track {
// 		background-color: transparent;
// 	}
// 	&::-webkit-scrollbar-thumb {
// 		background-color: rgb(236, 92, 224);
// 		border-radius: 20px;
// 		border: 6px solid transparent;
// 		background-clip: content-box;
// 	}
// 	&::-webkit-scrollbar-thumb:hover {
// 		background-color: rgb(251, 134, 251);
// 	}
// 	&::-webkit-scrollbar-corner {
// 		background: rgba(0,0,0,0);
// 	}
// `

// const TotalDiv = styled.div`
// 	width: 100%;
// 	text-align: center;
// `

// const SpecialButton = styled.button`
// width: 10%;
// padding: 1em;
// color: white;
// border: none;
// background: none;
// background-image: url(${img});
// background-position: top;
// background-size: 100% 100%;
// background-repeat: no-repeat;
// &:hover {
// 	animation: shake 0.5s infinite;
// }
// `

// const PolaroidDiv = styled.div`
// margin: 0px 2em;
// max-width: 20%;
// max-height: 45%;
// padding-top: 1em;
// background-color: rgb(238, 238, 246);
// margin-bottom: 2em;
// display: flex;
// flex-wrap: wrap;
// justify-content: center;
// align-content: space-around;
// color: rgb(255, 255, 255);
// text-align: center;
// box-shadow: 0 0 8px 0 rgb(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1);
// `

// const SpecialImg = styled.img`
// max-height: 70%;
// max-width: 90%;
// box-shadow: 0 0 8px 0 rgb(0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.561);
// border-radius: 10px;
// `