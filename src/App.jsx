import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDataContacts } from "./redux/contactsOps";
import { selectLoading, selectError } from './redux/contactsSlice';


function App() {
 const dispatch = useDispatch();
 const loading = useSelector(selectLoading)
 const error = useSelector(selectError)

 useEffect(() => {
  dispatch(fetchDataContacts())
 }, [dispatch]);

   return (
   <div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  {loading && !error && <p>Loading</p>}
  <ContactList />
   </div>
  );
};

export default App;
