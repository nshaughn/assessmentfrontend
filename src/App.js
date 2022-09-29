import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Checkout from './pages/Checkout';
import Home from './pages/Home';
import { getCookie } from "./common";
import { findUser } from "./utils";
import { faker } from '@faker-js/faker';
// import "./stylesheets/App.css"
// import "./stylesheets/Group_main.css"

const App = () => {
  const array = [];
  const priceList = [];
  const [errorMsg, setErrorMsg] = useState('');
  const [fruits, setFruits] = useState([]);
  const [user, setUser] = useState();
  const [token, setToken] = useState("");
  const [toggle, setToggle] = useState(false);
  const [registerClicked, setRegisterClicked] = useState(false);
  const [total, setTotal] = useState([]);

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
  }, [registerClicked])


      const fetchFruit = async () => {
        try {
          setErrorMsg('');
          const response = await fetch(`${process.env.REACT_APP_BASE_URL}getFruity`, {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
          })
          
          const data = await response.json();
          
          const fruitDetails = data.map(v => ({...v, price: Math.ceil(faker.datatype.number() / 40000)}))

          setFruits(fruitDetails)
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
          <Route path='/' exact element={<Home total={total} setTotal={setTotal} priceList={priceList} array={array} user={user} setUser={setUser} token={token} setToken={setToken} toggle={toggle} setToggle={setToggle} fruits={fruits} registerClicked={registerClicked} setRegisterClicked={setRegisterClicked} />} />
          {/* <Route path='/checkout' element={<Checkout />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
