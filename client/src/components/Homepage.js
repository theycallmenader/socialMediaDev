import React from 'react'
import PostDetails from './PostDetails'
import '../styles/homepage.css'
import { useSelector } from 'react-redux';
import AddPost from './AddPost';
import { useNavigate } from "react-router";

const Homepage = () => {
  const user = useSelector((state) => state?.user?.user);
    const navigate =useNavigate()
  return (
    
    <>
    <div className="homepageContainer">
      <div className="sidebar">
        <img style={{width:"100px",marginLeft:"30px"}} src="assets/logo.png" alt="" />
        <div className='icon-title-sidebar'>
        <i class="uil uil-home"></i>
      <h2>Home</h2>

        </div>
        <div className='icon-title-sidebar'>
        <i class="uil uil-favorite"></i>
      <h2>Explore</h2></div>
      <div className='icon-title-sidebar'>
      <i class="uil uil-bell"></i>
      <h2>Notifications</h2></div>
      <div className='icon-title-sidebar'>
      <i class="uil uil-message"></i>
      <h2>Messages</h2>
      </div>
      <div className='icon-title-sidebar'>
      <i class="uil uil-file-bookmark-alt"></i>
      <h2>Bookmarks</h2></div>
      <div className='icon-title-sidebar'>
      <i class="uil uil-file-bookmark-alt"></i>
      <h2>Lists</h2></div>
      <div className='icon-title-sidebar'>
      <i class="uil uil-user-circle"></i>
      <h2>Profile</h2></div>
      <div className='icon-title-sidebar'>
      <i class="uil uil-ellipsis-h"></i>
      <h2>More</h2>
</div>

<button style={{width:'80%' ,height:"48px",border:'none',borderRadius:"20px",backgroundColor:"#F8CBA6",marginTop:"20px"}}>Tweet</button>


<div className="side-bar-image-name">
  <img onClick={()=>navigate("/profile")} style={{cursor:'pointer',width:"50px",marginTop:"20px"}} src="assets/nader1.png" alt="" />
 
 <div> <h2>{user?.firstname} {user?.lastname}</h2>
 <h4 style={{color:"gray" ,fontWeight:'400'}}> @{user?.userName} </h4>

  </div>
  <br />
  
</div>
      </div>
      <div className="post-container">
        <AddPost/>
      {/* {post?.map((el)=> <>
        <PostDetails el={el}/>
        </>)
      } */}
      </div>
      <div className="rightBar"></div>
    </div>
    </>
    
  )
}

export default Homepage