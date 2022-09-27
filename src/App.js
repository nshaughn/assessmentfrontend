import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import { getCookie } from "./common";
import { findUser } from "./utils";
// import "./stylesheets/App.css"
// import "./stylesheets/Group_main.css"

const App = () => {

  const [errorMsg, setErrorMsg] = useState('');
  const [fruits, setFruits] = useState([])
  const [user, setUser] = useState()
  const [token, setToken] = useState("")
  const [toggle, setToggle] = useState(false);


  const loginWithToken = async (cookie) => {
    const user = await findUser(cookie)
    setUser(user)
  }

  useEffect(() => {
    fetchFruit()
    let cookie = getCookie("jwt_token")
    console.log(cookie)
    if(cookie !== false){
      loginWithToken(cookie)
    }
  }, [])


      const fetchFruit = async () => {
        try {
          setErrorMsg('');
          const response = await fetch('http://localhost:9001/getFruity', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
          })
          
          const data = await response.json();

          setFruits(data)
        } catch (error) {
          setErrorMsg('Oops, something went wrong')
        }
      };      
  
  if (errorMsg !== '') {
    return <h1>{errorMsg}</h1>
  }
  
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home user={user} setUser={setUser} token={token} setToken={setToken} toggle={toggle} setToggle={setToggle} fruits={fruits} />} />
          {/* <Route path='/checkout' element={<Checkout />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
