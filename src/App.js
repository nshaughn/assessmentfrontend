import { useState, useEffect } from "react";

import "./stylesheets/kurtiscss_main.css"
import { faker } from '@faker-js/faker';

// import "./App.css"

import UserModal from "./components/UserModal";
import AccountModal from "./components/AccountModal";
import FruitCard from "./components/FruitCard";


const App = () => {

  const [errorMsg, setErrorMsg] = useState('');
  const [fruits, setFruits] = useState([])
  const [user, setUser] = useState()
  const [token, setToken] = useState("")
  const [toggle, setToggle] = useState(false);
  useEffect (() => {
    fetchFruit()
  },[])
  
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

      <div className="master">
        {!user ?
          <>

            <div className="header_bar">
                <UserModal setter={setUser} setToken={setToken} toggle={toggle} setToggle={setToggle} />
              {/* <div className="login"><a href="">Login</a> <a href="">Register</a></div> */}
              <img className="logo_img" src={require("./images/smoothie_logo_v1.png")} />


            </div>     

              <h1 className="title">Smooth(ie) API</h1>
    
              <h2>log-in to create your smoothie!</h2>
              <div>
  
              </div>

          </>
          :
          <>
            <h1 className="title">Smooth(ie) API Menu</h1>

            <h2>User: {user} is logged in</h2>

            {fruits?.length > 0 ? (
              <div>
                {fruits.map((fruit) => (
                  <FruitCard fruit={fruit} />
                ))}
              </div>
            ) : (
              <div>
                <h1>NO FRUIT!!!!!!!!</h1>
              </div>
            )}

            <div className="navDiv">
              <div id="manageNav">
                <AccountModal token={token} />
              </div>
            </div>
          </>}

      </div>

  )
  //   <div className="main">
  //     <div className="contrast">
  //       {!user ?
  //         <>
  //           <h1 className="title">Smooth(ie) API</h1>
  //           <br></br>
  //           <br></br>
  //           <h2>log-in to create your smoothie!</h2>
  //           <div>
  //             <UserModal setter={setUser} setToken={setToken} toggle={toggle} setToggle={setToggle} />
  //             <br></br>
  //           </div>
  //         </>
  //         :
  //         <>
  //           <h1 className="title">Smooth(ie) API Menu</h1>
  //           <br></br>
  //           <br></br>
  //           <h2>User: {user} is logged in</h2>
  //           <div className="navDiv">
  //             <div id="manageNav">
  //               <AccountModal token={token} />
  //             </div>
  //           </div>
  //         </>}

  //     </div>
  //   </div>
  // )
}

export default App;
