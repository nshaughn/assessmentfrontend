import React from 'react';
import UserModal from "../components/UserModal";
import AccountModal from "../components/AccountModal";
import FruitCard from "../components/FruitCard";
import Sidebar from '../components/Sidebar';

function Home({ user, fruits, token, setUser, setToken, toggle, setToggle }) {
    return (
        <div className="contrast">
            {!user ?
                <>
                    <div className="highZ">
                        <Sidebar />
                    </div>
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
}

export default Home