import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
// import "./App.css"
import "./stylesheets/kurtiscss_main.css"

const App = () => {

  const [errorMsg, setErrorMsg] = useState('');
  const [fruits, setFruits] = useState([])
  const [user, setUser] = useState()
  const [token, setToken] = useState("")
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetchFruit()
  }, [])

      const fetchFruit = async () => {
        try {
          setErrorMsg('');
          const response = await fetch('http://localhost:9001/getFruity', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
          })
          
          const data = await response.json();
          console.log(data)
          setFruits(data)
        } catch (error) {
          setErrorMsg('Oops, something went wrong')
        }
      };      
  
  if (errorMsg !== '') {
    return <h1>{errorMsg}</h1>
  }

//   <div className="master">
//         {!user ?
//           <>

//             <div className="header_bar">
//                 <UserModal setter={setUser} setToken={setToken} toggle={toggle} setToggle={setToggle} />
//               {/* <div className="login"><a href="">Login</a> <a href="">Register</a></div> */}
//               <img className="logo_img" src={require("./images/smoothie_logo_v1.png")} />


//             </div>     

//               <h1 className="title">Smooth(ie) API</h1>
    
//               <h2>log-in to create your smoothie!</h2>
//               <div>
  
//               </div>

//           </>
//           :
//           <>
//             <h1 className="title">Smooth(ie) API Menu</h1>

//             <h2>User: {user} is logged in</h2>
  
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home user={user} setUser={setUser} token={token} setToken={setToken} toggle={toggle} setToggle={setToggle} fruits={fruits} />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
