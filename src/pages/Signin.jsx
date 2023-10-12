import React,{useState} from 'react'
import {Link} from 'react-router-dom'
function Signin() {
  const styling = {
    h1Tag: "text-3xl text-center font-semibold my-7",
    formInput: "border p-3 rounded-lg", 
    form: "flex flex-col gap-4",
    div: "p-3 max-w-lg mx-auto",
    signupButton: "bg-slate-700 text-white p-3 rounded-lg Uppercase hover:opacity-95",
    span:"text-blue-700",
    signInDiv:"flex gap-2 mt-5"
  }
 const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    // Update the formData state using the setFormData function
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted")
  };

  console.log(formData);
  return (

    <div className={styling.div}>
      <h1 className={styling.h1Tag}>Sign in</h1>
      <form onSubmit={handleSubmit} className={styling.form}>
        <input type="text" placeholder='email' className={styling.formInput} id='email' onChange={handleChange}/>
        <input type="text" placeholder='password' className={styling.formInput} id='password' onChange={handleChange}/>
        <button className={styling.signupButton}>Sign In</button>
      </form>
        <div className={styling.signInDiv}>
          <p>Dont have an account? <span className={styling.span} ><Link to={"/sign-up"}>sign up</Link></span></p>
        </div>
       
    </div>
   
  )
}

export default Signin