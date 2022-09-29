import Modal from 'react-modal'
import { useState } from 'react'
import '../accountModal.css';
import DisplayUsers from "./DisplayUsers";
import NameEdit from "./NameEdit";
import EmailEdit from "./EmailEdit";
import PasswordEdit from "./PasswordEdit";
import AccountDelete from "./UserDelete";
Modal.setAppElement('#root');

const AccountModal = ({token}) => {
    const [accountStateModal, showAccountStateModal] = useState(false)
    function openAccountModal() { showAccountStateModal(true); }
    function closeAccountModal() { setToggle(false); showAccountStateModal(false); }
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <button onClick={openAccountModal} id="account">Manage account</button>
            <Modal isOpen={accountStateModal} onRequestClose={closeAccountModal} className="modalContent" id="userFlex" contentLabel="Example Modal" overlayClassName="modalZ">
                <DisplayUsers wide={toggle} setWide={setToggle}/>
                <div className={!toggle ? "showUser" : "hideUser"}>
                    <NameEdit token={token} />
                    <EmailEdit token={token} />
                    <PasswordEdit token={token} />
                    <AccountDelete token={token} />
                </div>
            </Modal>
        </div>
    )
}

export default AccountModal
