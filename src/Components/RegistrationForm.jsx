
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";


const RegistrationForm = () => {
const formik = useFormik({
    initialValues: {
        firstname: "",
        lastname:"",
        age:"",
        email: "",
        query:"",
        message: "",
        check: "",
    },
    validationSchema: Yup.object({
        firstname: Yup.string()
        .required("first name is required")
        .min(3, "first name must be at least 3 characters"),
        lastname: Yup.string()
        .required("last name is required")
        .min(3, "last name must be at least 3 characters"),
        email: Yup.string().email("Invalid email address").required("Required"),
        age: Yup.number().required("Required"),
        query: Yup.boolean(),
        // .min(6, "Password must be at least 6 characters")
        // .required("Password is required"),
        message: Yup.string()
        .required("Please Enter your message"),
        check: Yup.boolean().required("Please Check that"),
    }),
    validateOnChange: true, 
    onSubmit: (values) => {
        alert("Form submitted successfully", values);
    },
    });

    return (
    <form onSubmit={formik.handleSubmit} className="form">
        <h1>Contact Us</h1>
        <div className="full">
        <div>
        
        <label>First name*</label>
        <input
            className="input"
            type="text"
            name="firstname"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.errors.firstname && formik.touched.firstname && (
            <p className="error">{formik.errors.firstname}</p>
        )}
    </div>
    
    <div>
        
        <label>Last name*</label>
        <input
            className="input"
            type="text"
            name="lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.errors.lastname && formik.touched.lastname && (
            <p className="error">{formik.errors.lastname}</p>
        )}
    </div>
        </div>
    

    <div>
        <label>Email Address*</label>
        <input
        className="input"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email && (
            <p className="error">{formik.errors.email}</p>
        )}
    </div>

    <div>
        <label>Age</label>
        <input
        className="input"
            type="number"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.errors.age && formik.touched.age && (
            <p className="error">{formik.errors.age}</p>
        )}
        </div>

    <div>
        <label>Query Type</label>
        <div className="null">
            <div className="rad">
            <label >General Query
        <input
            className="input"
            type="radio"
            name="query"
            value={formik.values.query}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            
        />
        </label>
            </div>
        
        <div className="rad">
        <label > Support Query 
            <input 
            className="input"
            type="radio"
            name="query"
            value={formik.values.query}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        /> </label>
        </div>
        
        
        </div>
        
        {formik.errors.query && formik.touched.query && (
            <p className="error">{formik.errors.query}</p>
        )}
        </div>

        <div>
        <label>Message</label>
        <input
        className="input area"
            type="textarea"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.errors.message && formik.touched.message && (
            <p className="error">{formik.errors.message}</p>
        )}
        </div>

        <div className="check">
        
        <input
        
            type="checkbox"
            name="check"
            value={formik.values.check}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        /> 
        <label>I consent to be contact with team</label>
        </div>
        
        {formik.errors.check && formik.touched.check && (
            <p className="error">{formik.errors.check}</p>
        )}

        <button type="submit" className="btn">Register</button>
    </form>

);
};

export default RegistrationForm;