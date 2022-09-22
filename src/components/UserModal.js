import Modal from 'react-modal'
import { useState } from 'react'
import '../userModal.css';
import Register from './Register';
import Login from './Login';
// import DisplayMovies from "./DisplayMovies";
Modal.setAppElement('#root');

const UserModal = ({ setter, setToken, closeLoginModal, closeRegisterModal, loginStateModal, registerStateModal }) => {
    // const [loginStateModal, showLoginStateModal] = useState(false)
    // const [registerStateModal, showRegisterStateModal] = useState(false)
    // function closeLoginModal() { showLoginStateModal(false); }
    // function closeRegisterModal() { showRegisterStateModal(false); }

    return (
        <div>
            <div>
                {/* <div><a onClick={openLoginModal}>Login</a> <a onClick={openRegisterModal}>Register</a> </div> */}
                <Modal isOpen={loginStateModal} onRequestClose={closeLoginModal} className="modalContent" contentLabel="Example Modal" overlayClassName="modalZ">
                    <Login setter={setter} setToken={setToken} />
                </Modal>
            </div>
            {/* <div>
                    <DisplayMovies movieListState={movieListState} setMovieListState={setMovieListState} toggle={toggle} setToggle={setToggle} />
                </div> */}
            <div>
                <div></div>
                <Modal isOpen={registerStateModal} onRequestClose={closeRegisterModal} className="modalContent" contentLabel="Example Modal" overlayClassName="modalZ">
                    <Register />
                </Modal>
            </div>
            {/* {movieListState.map((movies, index) => (<div><h3 key={index}>Title: &nbsp;&nbsp;&nbsp;{movies.title}<br></br>Lead: &nbsp;&nbsp;&nbsp;{movies.actor}</h3></div>))} */}
            {/* <div className="movieList"> */}
            {/* <div className={toggle ? "showUser" : "hideUser"}> */}
            {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default UserModal