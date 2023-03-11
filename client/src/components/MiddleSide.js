import React from 'react'
import "../styles/middleside.css"
import AddPost from './AddPost'
const MiddleSide = () => {
  return (
    <>
    <div className="middle-side">
      <div className="middle-side-content">
        <img src="assets/cover.jpg" alt=""  className='cover-profile-image'/> <br />
        <img src="assets/nader2.png" alt=""  className='profile-image'/>
       <div className='info-under-photo'>
        <h2 style={{color:"black"}}>Nader Sdiri</h2>
        <p>Full Stack Developer</p>
        <div className="line-separator"></div>
        </div>
        <div style={{display:"flex", gap:"20px",padding:'10px 0'}}>
          <h4>6000 following</h4> 
      <h4>6 followers</h4>
       </div>
       <div className="line-separator"></div>
       <AddPost/>
      </div>
    </div>
    </>
  )
}

export default MiddleSide