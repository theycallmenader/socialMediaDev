import React from 'react'
import "../styles/leftside.css";
import PersonelInfo from './PersonelInfo';
import ProfileFollow from './ProfileFollow';
import { useNavigate } from "react-router";

const LeftSide = () => {
  const navigate=useNavigate()
  return (
    <>
    <div className="left-side">
        <div className="left-side-container">
            <div className="left-side-content">
                <div className="search-bar">
                    {/* <div className="left-side-logo"> */}
                      <img onClick={()=>navigate('/homepage')} src="assets/logo.png" className='profile-logo' alt="" />
                    {/* </div> */}
                    <input type="text" />
                    <i className="uil uil-search search-icon"></i>      
                              </div>
                            <PersonelInfo/>
                            <h2 style={{color:"black" , marginTop:"20px"}}>Who is following you</h2>
                            <ProfileFollow/>
                            <ProfileFollow/>
                            <ProfileFollow/>
                            <ProfileFollow/>
                            <ProfileFollow/>
                            <ProfileFollow/>
                            <ProfileFollow/>
                            <ProfileFollow/>

            </div>
        </div>
    </div>
    </>
  )
}

export default LeftSide