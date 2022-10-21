import { ImCross } from "react-icons/im";

const ErrorModal = ({ message, onClose }) => {
  return (
    <div className="error__box">
      <ImCross onClick={onClose} className="close__error--message" />
      <p className="error__modal--message">{message}</p>
    </div>
  );
};
export default ErrorModal;
