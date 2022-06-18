import React,{useEffect, useState} from 'react'
import{Link,useNavigate} from 'react-router-dom'

const Coba = () => {

  const [user,setUser] = useState([])
  const navigate =useNavigate()
  console.log(user.name)
  const [username,setUsername] = useState('')
  console.log(username)
  const [password,setPassword] = useState('')
  const[result,setResult] = useState(false)
  const [error,setError] = useState(false)
  useEffect(()=>{
    const getdata = window.localStorage.getItem('data')
     if(getdata === null){
       return false
     }
      const data = JSON.parse(getdata)
      setUser(data)
  },[username,password])
  const login =(e)=>{
    e.preventDefault()
    if(username !== user.name &&password !== user.password){
     setError(true)
    }else{
      setResult(true)
      navigate('/dashboard')
    }
  }
  return (
    <div>
      <h1>Login</h1>
    <form onSubmit={login}>
      <input type="text" onChange={(e)=>setUsername(e.target.value)}/>
      <input type="password" onChange={(e)=>setPassword(e.target.value)} />
      <button type="submit">Login</button>
    {error ? <h1>Username atau Password Salah</h1> : result ?  <h1>Login Berhasil</h1> : null}
    </form>
    <Link to='/Register'>Register</Link>
    </div>
  )
}

export default Coba