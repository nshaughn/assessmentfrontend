import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
// import "./App.css"
// import "./stylesheets/kurtiscss_main.css"

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
