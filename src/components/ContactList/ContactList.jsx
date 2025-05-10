import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

// const getfilterContacts = (contacts, filter) => {
//  if (!filter) return contacts;
//  return contacts.filter(contact => 
//   contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.includes(filter));
//  };

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
     
  return (
    <ul className={s.contactList}>
    { filteredContacts.map(contact => (
      <li key={contact.id}>
     <Contact data={contact} />
      </li>
     
        ))}
   </ul>
  );

};

export default ContactList;
