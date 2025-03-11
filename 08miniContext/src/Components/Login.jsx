import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../Context/userContext'

function Login() {
const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');

const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({
            userName,
            password
        })
    }
  return (
    <div>
        <h1>LOGIN</h1>
        <input type="text" 
        value={userName} 
        onChange={(e)=>setUserName(e.target.value)} 
        placeholder='username' />
        <br />
        <br />
        <input type="password" 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password' /><br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login