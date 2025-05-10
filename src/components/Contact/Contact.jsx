import { HiUser } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteDataContacts } from "../../redux/contactsOps";
import PropTypes from "prop-types";



const Contact = ({ data }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteDataContacts(data.id));
  
    return (
      <li className={s.list}>
        <div>
          <div className={s.info}>
            <HiUser />
            <p>{data.name}</p>
          </div>
          <div className={s.info}>
            <FaPhoneAlt />
            <p>{data.number}</p>
          </div>
        </div>
        <button type="button" className={s.button} onClick={handleDelete}>
          Delete
        </button>
      </li>
    );
  };
  
  Contact.propTypes = {
    data: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  export default Contact;

