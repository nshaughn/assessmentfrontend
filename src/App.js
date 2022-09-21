import { useState, useEffect } from "react";
import "./App.css"
import { faker } from '@faker-js/faker';
import UserModal from "./components/UserModal";
import AccountModal from "./components/AccountModal";


const App = () => {
  const [user, setUser] = useState()
  const [errorMsg, setErrorMsg] = useState('');
  const [token, setToken] = useState("")
  const [toggle, setToggle] = useState(false);

  useEffect (() =>
  {
    const fetchFruit = async () =>
    {
      try {
        setErrorMsg('');
        const response = await fetch('http://localhost:9001/getFruity', {
          method: 'GET',
          headers: {"Content-Type": "application/json"}
        })
        
        const data = await response.json();
        console.log(data)
      
        const fruitDetails = data.map(() =>
        {

          return {
            id: fruitEntry.id,
            fruitIndex: index,
            name: fruitEntry.name,
            genus: fruitEntry.genus,
            family: fruitEntry.family,
            order: fruitEntry.order,
            nutritions: fruitEntry.nutritions,
            fruitPrice: Math.ceil(faker.datatype.number() / 2)

          }
        })
        
        
        console.log(fruitDetails)


      } catch (error) {
        setErrorMsg('Oops, something went wrong')
      }
    };
    fetchFruit();
  }, [])

  if (errorMsg !== '') {
    return <h1>{errorMsg}</h1>
  }

  return (
    <div className="main">
      <div className="contrast">
        {!user ?
          <>
            <h1 className="title">Smooth(ie) API</h1>
            <br></br>
            <br></br>
            <h2>log-in to create your smoothie!</h2>
            <div>
              <UserModal setter={setUser} setToken={setToken} toggle={toggle} setToggle={setToggle} />
              <br></br>
            </div>
          </>
          :
          <>
            <h1 className="title">Smooth(ie) API Menu</h1>
            <br></br>
            <br></br>
            <h2>User: {user} is logged in</h2>
            <div className="navDiv">
              <div id="manageNav">
                <AccountModal token={token} />
              </div>
            </div>
          </>}

      </div>
    </div>
  )
}

export default App;
