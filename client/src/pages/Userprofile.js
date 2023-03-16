import React from 'react'
import { useSelector } from 'react-redux';
import LeftSide from '../components/LeftSide';
import MiddleSide from '../components/MiddleSide';
import RightSide from '../components/RightSide';
import '../styles/userprofile.css';
const Userprofile = ({ping,setPing}) => {
  const user = useSelector((state) => state?.user?.user);
  console.log(user,"userrr")
  return (
    <>
      <div className="profile">
        <LeftSide/>
        <MiddleSide ping={ping} setPing={setPing}/>
        <RightSide/>
      </div>
    </>
  );
}

export default Userprofile