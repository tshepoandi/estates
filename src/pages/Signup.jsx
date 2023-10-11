import React from 'react'
import {Link} from 'react-router-dom'
function Signup() {
  const styling = {
    h1Tag: "text-3xl text-center font-semibold my-7",
    formInput: "border p-3 rounded-lg", 
    form: "flex flex-col gap-4",
    div: "p-3 max-w-lg mx-auto",
    signupButton: "bg-slate-700 text-white p-3 rounded-lg Uppercase hover:opacity-95",
    span:"text-blue-700",
    signInDiv:"flex gap-2 mt-5"
  }
  return (
    <div className={styling.div}>
      <h1 className={styling.h1Tag}>SignUp</h1>
      <form className={styling.form}>
        <input type="text" placeholder='username' className={styling.formInput} />
        <input type="text" placeholder='email' className={styling.formInput} />
        <input type="text" placeholder='password' className={styling.formInput} />
        <button className={styling.signupButton}>Sign Up</button>
      </form>
        <div className={styling.signInDiv}>
          <p>Have an account? <span className={styling.span} ><Link to={"/sign-in"}>sign In</Link></span></p>
        </div>
       
    </div>
   
  )
}

export default Signup