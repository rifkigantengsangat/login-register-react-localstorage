import React,{useEffect,useState,useReducer} from "react";
import {Link} from 'react-router-dom'
import Coba from "./Coba";
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


const handleSubmit = (e) =>{
  e.preventDefault()
   localStorage.setItem('data',JSON.stringify(state))
  
}

  
  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>dispatch({type:'gantinama',payload:{name:e.target.value}})}/>
        <input type="password" onChange={(e)=>dispatch({type:'gantipassword',payload:{password:e.target.value}})}/>
        <button type="submit">Submit</button>
        </form>
        <Link to='/'>Login</Link>

    </div>

   
  );
}

export default Register;
