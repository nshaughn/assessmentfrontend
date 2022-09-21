import Modal from 'react-modal'
import { useState } from 'react'
import '../userModal.css';
import Register from './Register';
import Login from './Login';
// import DisplayMovies from "./DisplayMovies";
Modal.setAppElement('#root');

const UserModal = ({ setter, setToken, movieListState, setMovieListState, toggle, setToggle }) => {
    const [loginStateModal, showLoginStateModal] = useState(false)
    const [registerStateModal, showRegisterStateModal] = useState(false)
    function openLoginModal() { showLoginStateModal(true); }
    function openRegisterModal() { showRegisterStateModal(true); }
    function closeLoginModal() { showLoginStateModal(false); }
    function closeRegisterModal() { showRegisterStateModal(false); }

    return (
        <div>
            <div className="modalBox">
                <div>
                    <button onClick={openLoginModal} id="login">Log-in</button>
                    <Modal isOpen={loginStateModal} onRequestClose={closeLoginModal} className="modalContent" contentLabel="Example Modal" overlayClassName="modalZ">
                        <Login setter={setter} setToken={setToken} />
                    </Modal>
                </div>
                {/* <div>
                    <DisplayMovies movieListState={movieListState} setMovieListState={setMovieListState} toggle={toggle} setToggle={setToggle} />
                </div> */}
                <div>
                    <button onClick={openRegisterModal} id="register">Register</button>
                    <Modal isOpen={registerStateModal} onRequestClose={closeRegisterModal} className="modalContent" contentLabel="Example Modal" overlayClassName="modalZ">
                        <Register />
                    </Modal>
                </div>
                    {/* {movieListState.map((movies, index) => (<div><h3 key={index}>Title: &nbsp;&nbsp;&nbsp;{movies.title}<br></br>Lead: &nbsp;&nbsp;&nbsp;{movies.actor}</h3></div>))} */}
            </div>
            {/* <div className="movieList"> */}
                {/* <div className={toggle ? "showUser" : "hideUser"}> */}
                {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default UserModal