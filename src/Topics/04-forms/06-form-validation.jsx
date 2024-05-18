import React from 'react'
// NAme,Email,Password,Confirm  Password
//! Both are predefined library of react
//? we use formik for get value ===> npm i formik
//? we use  yup for validationand can cod also ===> npm i yup
import { Formik, connect, useFormik } from 'formik';
import * as Yup from 'yup';
const RegistrationSchemas=Yup.object({
    name:Yup.string().min(6).max(30).required("Please Enter your name"),
    email:Yup.string().email().required("Please Enter yor Email"),
    password:Yup.string().min(6).required("Please Enter your password"),
    confirm_password:Yup.string()
    .required("Please Confirm Your PassWord")
    .oneOf([Yup.ref("password")],"Password Must match")

});
const initialValues={
    name:"",
    email:"",
    password:"",
    confirm_password:""
}
const FormValidation = () => {

  
    const Formik=useFormik({
        initialValues:initialValues,
        validationSchema:RegistrationSchemas,
        onSubmit:(values,helper)=>{
            console.log(values);
           helper.resetForm();            
        }
    })

    const{values,errors,handleBlur,handleChange,handleSubmit,touched}=Formik;  //? Formik return object thats why we distruct into single single elemnts or object or function   

    
   
    //  console.log(Formik);
  return (
    <div>
      <h1>Registration</h1>
     
      <form action="" onSubmit={handleSubmit}>
       {/* Name */}
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" name='name' id='name' placeholder='Enter Your Name' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
      </div>
      {errors.name && touched.name ? <span>{errors.name}</span>:null}
      <br />
      {/*  Email */}
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" name='email' id='email' placeholder='Enter Your Email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
      </div>
     {errors.email && touched.email ? <span>{errors.email}</span> :null } 

      <br />
     {/*  Password */}
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" name='password' id='password' placeholder='Enter Your Password' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
      </div>
     {errors.password && touched.password ?  <span>{errors.password}</span>:null}

     

      <br />
       {/* Confirm Password */}
      <div>
        <label htmlFor="confirm_password">Confirm Password: </label>
        <input type="password" name='confirm_password' id='confirm_password' placeholder='Enter Your Confirm Password' value={values.confirm_password} onChange={handleChange} onBlur={handleBlur}/>
      </div>
      {errors.confirm_password && touched.confirm_password?  <span>{errors.confirm_password}</span>:null }
    

      <br />
       {/* Submit button */}
      <button type='submit' >Registration</button>
      </form>
    </div>
  )
}

export default FormValidation
