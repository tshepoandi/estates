import React from 'react'
import {GoogleAuthProvider,getAuth,signInWithPopup} from 'firebase/auth'
import {app} from '../firebase'
import { useDispatch} from 'react-redux'
import { signInSuccess} from '../redux/user/userSlice'
import {useNavigate} from "react-router-dom"


function Oauth() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)
      const result = await signInWithPopup(auth, provider)
      const res = await fetch('/api/auth/google',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name:result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      })
      const data = await res.json();
      dispatch(signInSuccess, (data));
      navigate("/")
    } catch (error)  {
      
    }
 }
  return (
    <button onClick={handleGoogleClick} type="button" className='bg-zinc-300 text-black p-3 rounded-lg Uppercase hover:opacity-95 uppercase'>Continue With Google</button>
  )
}

export default Oauth 