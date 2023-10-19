import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { signInStart,signInFailure,signInSuccess } from '../redux/user/userSlice'

function Signin() {
  const styling = {
    h1Tag: "text-3xl text-center font-semibold my-7",
    formInput: "border p-3 rounded-lg", 
    form: "flex flex-col gap-4",
    div: "p-3 max-w-lg mx-auto",
    signupButton: "bg-slate-700 text-white p-3 rounded-lg Uppercase hover:opacity-95 uppercase",
    span:"text-blue-700",
    signInDiv:"flex gap-2 mt-5",
    error:"text-red-500 mt-5"
  }
  const [formData, setFormData] = useState({});
  const {loading,error} = useSelector((state)=> state.user);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e) => {
    // Update the formData state using the setFormData function
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    dispatch(signInStart())

    try {
      const res = await fetch('/api/auth/sign-in',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json();
      if(data.success === false) {
        dispatch(signInFailure(data.message))
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/")
      console.log(data);
      console.log("form submitted")    
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  
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
          <p>Dont have an account? <span className={styling.span} ><Link to={"/sign-up"}>Sign Up</Link></span></p>
        </div>
        {error && <p className={styling.error}>{error.message}</p>}
       
    </div>
   
  )
}

export default Signin