import React, { useState } from 'react'
import Login from '../components/Login'
import Register from '../components/Register'   

const LoginRegister = () => {
    const [isLogin, setIsLogin] = useState(true);
    console.log(isLogin,"islogiiin")
    // const [left, setLeft] = useState({left:'0'})
    const [left, setLeft] = useState("0");
    const [right, setRight] = useState("0");
console.log(right,"right")
    console.log(left,"left")

  return (
    <>
    {isLogin ? <Login setIsLogin={setIsLogin} left={left} setLeft={setLeft} right={right} setRight={setRight}/> : <Register setIsLogin={setIsLogin}  isLogin={isLogin}/> }
   
   
    </>
  )
}

export default LoginRegister