import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { Link } from "react-router-dom";
import s from "./RegistrationForm.module.css";

const RegisterForm = () => {
    const dispatch = useDispatch ();

    const initialValues = {
        email: "",
        password: "",
    };

    const handleSubmit = (values, options) => {
       dispatch(registerThunk(values));
    }

    return (
      <div>
      <h1 className={s.title}>Register now!</h1>
    

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>

            <Form className={s.form}>
          <fieldset className="fieldset">
          <label className={s.label}>Email</label>
          <Field name="email" type="email" className={s.input} placeholder="Email" />
          <label className={s.label}>Password</label>          
          <Field name="password" type="password" className={s.input} placeholder="Password" />

          <div>
            <Link to="/register" className={s.link}>SIGN IN</Link>
          </div>
          <button type="submit" className={s.button} >Register</button>
        </fieldset>
            </Form>
            </Formik>
        
      </div>

    )
}

export default RegisterForm;