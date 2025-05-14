// import ContactForm from "./components/ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { fetchDataContacts } from "./redux/contactsOps";
// import { selectLoading, selectError } from './redux/contactsSlice';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout/Layout";
import { refreshThunk } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";

function App() {
 const dispatch = useDispatch();
 const isRefreshing = useSelector(selectIsRefreshing);

 useEffect(() => {
  dispatch(refreshThunk())
 }, [dispatch]);

   return isRefreshing ? null : (
   <div>
  <h1>Welcome!</h1>
  <Routes>
  <Route path='/' element={<Layout />}>
  <Route index element={<HomePage />} />
  <Route path="/contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
  <Route path='*' element={<NotFoundPage />} />
  <Route path='/register' element={<RegistrationPage />} />
  <Route path='/login' element={<RestrictedRoute><LoginPage /></RestrictedRoute>} />
</Route> 
  </Routes>
   </div>
  );
};

export default App;
