import React,{useEffect,useState,useReducer} from "react";
import {Link} from 'react-router-dom'
import Coba from "./Coba";
import './register.css'
function Register() {
const initialState = ({
  count : 0,
  name : '',
  password : '',
})
const reducer = (state, action) =>{
  
  switch(action.type){
    case 'increment':
      return{...state
        ,count : state.count + 1}
      case 'gantinama':
        return {...state,
          name : action.payload.name}
      case 'gantipassword':
        return {...state,
          password : action.payload.password}
     
  }

}

 
const [state,dispatch] = useReducer(reducer,initialState)
const [msg,setMsg] = useState('')
console.log(state.name)


const handleSubmit = (e) =>{
  e.preventDefault()
   localStorage.setItem('data',JSON.stringify(state))
  const regex =  /^(?!\s)[A-Z0-9\s]+$/i
  if(regex.test(state.name)){
setMsg('Email Valid')
  }else if(!regex.test(state.name`email here`) && state.name !==''){ 
    setMsg('Email Tidak Valid')
  }else{
    setMsg('')
  }
}

  
  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className='form-horizontal'>
        <input type="text" onChange={(e)=>dispatch({type:'gantinama',payload:{name:e.target.value}})}/>
        <input type="password" onChange={(e)=>dispatch({type:'gantipassword',payload:{password:e.target.value}})}/>
        <button type="submit">Submit</button>
        <h1>{msg}</h1>
        <Link to='/' className="link">Login</Link>
        </form>
      

    </div>

   
  );
}

export default Register;
