import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const ContactsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);
      
    return <div>
        <h2>Contacts Page</h2>
            </div>
}

export default ContactsPage;