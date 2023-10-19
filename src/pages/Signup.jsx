import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Oauth from '../components/Oauth';
function Signup() {
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
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate()
  const handleChange = (e) => {
    // Update the formData state using the setFormData function
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const res = await fetch('/api/auth/sign-up',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json();
      if(data.success === false) {
        setError(data.message)
        setLoading(false)
        return;
      }
      setLoading(false)
      setError(null)
      navigate("/sign-in")
      console.log(data);
      console.log("form submitted")    
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  
  };

  return (

    <div className={styling.div}>
      <h1 className={styling.h1Tag}>Sign Up</h1>
      <form onSubmit={handleSubmit} className={styling.form}>
        <input type="text" placeholder='username' className={styling.formInput} id='username' onChange={handleChange} />
        <input type="text" placeholder='email' className={styling.formInput} id='email' onChange={handleChange}/>
        <input type="text" placeholder='password' className={styling.formInput} id='password' onChange={handleChange}/>
        <button disabled={loading} className={styling.signupButton}>
          {loading? "Loading...": "Sign Up" }
        </button>
        <Oauth></Oauth>
      </form>
      
        <div className={styling.signInDiv}>
          <p>Have an account? <span className={styling.span} ><Link to={"/sign-in"}>Sign In</Link></span></p>
        </div>
       {error && <p className={styling.error}>{error}</p>}
    </div>
    
   
  )
}

export default Signup