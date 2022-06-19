import React,{useEffect, useState} from 'react'
import{Link,useNavigate} from 'react-router-dom'
import './coba.css'

const Coba = () => {

  const [user,setUser] = useState([])
  console.log(user.password)
  const navigate =useNavigate()
  
  const [username,setUsername] = useState('')
 
  const [password,setPassword] = useState('')
  const[result,setResult] = useState(false)
  const [error,setError] = useState(false)
  const [data,setData] = useState({
    name : '',
    password : ''
  })
  const [isauthenticated,setIsAuthenticated] =useState(false)
  console.log(password);
  
  useEffect(()=>{
    const getdata = window.localStorage.getItem('data')
     if(getdata === null){
       console.log("kosong")
     }
      const data = JSON.parse(getdata)
      setUser(data)
  },[data])
  const login =(e)=>{
    e.preventDefault()
    if(username !== user.name &&password !== user.password){
     setError(true)
    }else if(username ==='' && password ==='' || username === undefined && password === undefined){
      setError(true)
    
    }else{
      setResult(true)
      setData({
        username,
      password
        
      })
    
      navigate('/dashboard')
    }
  }
  return (
    <div className='login'>
      <div className='login-text'>
      <h1>Login</h1>
      </div>
      <div className='login-container'>
      
    <form onSubmit={login} className='login-form'>
    {error ? <h2>Username atau Password Salah</h2> : result ?  <h2>Login Berhasil</h2> : null}
      <label htmlFor='username'>Username</label>
      <input type="text" required onChange={(e)=>setUsername(e.target.value)}/>
     
      <label htmlFor='password'>Password</label>
      <input type="password" required onChange={(e)=>setPassword(e.target.value)} />
      <button type="submit">Login</button>
      <h2>Belum Memiliki Akun?</h2>
      <Link to='/Register' className="reg">Register</Link>
    </form>
   
    </div>
    </div>
  )
}

export default Coba