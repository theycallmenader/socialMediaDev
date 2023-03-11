import React from 'react'
import { useSelector } from 'react-redux';
import LeftSide from '../components/LeftSide';
import MiddleSide from '../components/MiddleSide';
import RightSide from '../components/RightSide';
import '../styles/userprofile.css';
const Userprofile = () => {
  const user = useSelector((state) => state?.user?.user);
  console.log(user,"userrr")
  return (
    <>
      <div className="profile">
        <LeftSide/>
        <MiddleSide/>
        <RightSide/>
      </div>
    </>
  );
}

export default Userprofile