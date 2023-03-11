import React from 'react'
import "../styles/leftside.css";
import PersonelInfo from './PersonelInfo';
import ProfileFollow from './ProfileFollow';
const LeftSide = () => {
  return (
    <>
    <div className="left-side">
        <div className="left-side-container">
            <div className="left-side-content">
                <div className="search-bar">
                    <div className="left-side-logo"></div>
                    <input type="text" />
                    <i className="uil uil-search search-icon"></i>      
                              </div>
                            <PersonelInfo/>
                            <ProfileFollow/>
            </div>
        </div>
    </div>
    </>
  )
}

export default LeftSide