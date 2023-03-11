import React from 'react'
import { useSelector } from 'react-redux';
import '../styles/userprofile.css';
const Userprofile = () => {
  const user = useSelector((state) => state?.user?.user);
  console.log(user,"userrr")
  return (
    <>
      
      <h1>{user?.email}</h1>
      aaa
    </>
  );
}

export default Userprofile