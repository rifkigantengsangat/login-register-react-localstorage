import React,{useState,useEffect} from 'react'



const Dashboard = () => {
  const [username,setUsername] = useState('')
useEffect(()=>{
  const getdata = window.localStorage.getItem('data')
  const parse = JSON.parse(getdata)
   setUsername(parse.name)
},[username])
  return (
    <div>Hi, {username}</div>
  )
}

export default Dashboard