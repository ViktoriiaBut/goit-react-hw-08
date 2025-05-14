import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { Link } from "react-router-dom";
import s from "./loginForm.module.css";

const LoginForm = () => {
    const dispatch = useDispatch();
    const initialValues = {
        email: "",
        password: "",
    };

    const handleSubmit = (values, { resetForm }) => {
     dispatch(loginThunk(values));
     resetForm();
    }

    return (
        <div >
       <h1 className={s.title}>Login now!</h1>
      
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={s.form}>
          <fieldset className={s.fieldset}>
          <label className={s.label}>Email</label>
          <Field name="email" type="email" className={s.input} placeholder="Email" />
          <label className={s.label}>Password</label>
          <Field name="password" type="password" className={s.input} placeholder="Password" />
          <div>
            <Link to="/register" className={s.link}>SIGN UP</Link>
          </div>
          <button type="submit" className={s.button} >Login</button>
        </fieldset>
            </Form>
            </Formik>
        
      </div>

    )
}

export default LoginForm;