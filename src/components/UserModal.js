import Modal from 'react-modal'
import Register from './Register';
import Login from './Login';
Modal.setAppElement('#root');

const UserModal = ({ setter, setToken, closeLoginModal, closeRegisterModal, loginStateModal, registerStateModal }) => {

    return (
        <div>
            <div>
                <Modal isOpen={loginStateModal} onRequestClose={closeLoginModal} className="modalContent" contentLabel="Example Modal" overlayClassName="modalZ">
                    <Login setter={setter} setToken={setToken} />
                </Modal>
            </div>

            <div>
                <div></div>
                <Modal isOpen={registerStateModal} onRequestClose={closeRegisterModal} className="modalContent" contentLabel="Example Modal" overlayClassName="modalZ">
                    <Register />
                </Modal>
            </div>
        </div>
    )
}

export default UserModal