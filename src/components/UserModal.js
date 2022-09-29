import Modal from 'react-modal'
import Register from './Register';
import Login from './Login';
Modal.setAppElement('#root');

const UserModal = ({ setter, closeLoginModal, closeRegisterModal, loginStateModal, registerStateModal, user, registerClicked, setRegisterClicked }) => {

    return (
        <div>
            <div>
                <Modal isOpen={loginStateModal} onRequestClose={closeLoginModal} className="modalContent" contentLabel="Example Modal" overlayClassName="modalZ">
                    <Login setter={setter} />
                </Modal>
            </div>

            <div>
                <div></div>
                <Modal isOpen={registerStateModal} onRequestClose={closeRegisterModal} className="modalContent" contentLabel="Example Modal" overlayClassName="modalZ">
                    <Register setter={setter} user={user} registerClicked={registerClicked} setRegisterClicked={setRegisterClicked} />
                </Modal>
            </div>
        </div>
    )
}

export default UserModal
