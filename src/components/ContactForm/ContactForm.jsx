import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addDataContacts } from '../../redux/contactsOps';

const ContactForm = () => {
  const dispatch = useDispatch();

  const submitForm = (values, actions) => {
    const contactData = {
      name: values.name,
      number: values.number,
    };
    
   dispatch(addDataContacts(contactData));
   actions.resetForm();
  };


  const feedbackSchema = Yup.object().shape({
    name: Yup.string().min(3).max(20).required("Required"), 
    number: Yup.string().min(7).max(20).required("Required"), 
        });


        
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={feedbackSchema}
      onSubmit={submitForm}
    >
 
      {() => (
        <Form className={s.form}>
          <div>
          <label className={s.label}>Name</label>         
            <Field className={s.input} type="text" name="name" id="name" style={{ padding: "8px 16px", borderRadius: 6 }}/>
            <ErrorMessage name="name" className={s.error} component="div" />
          </div>
          
          <div>
          <label className={s.label}>Number</label>
            <Field className={s.input} type="text" name="number" id="number" style={{ padding: "8px 16px", borderRadius: 6 }}/>
            <ErrorMessage name="number" className={s.error} component="div" />
            </div>

          <button type="submit" className={s.button}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;