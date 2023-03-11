import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createAddPost } from '../JS/addPostSlice/postSlice';
import PostDetails from './PostDetails'

const AddPost = ({}) => {
  const [postContent, setPostContent] = useState("");
  const user = useSelector((state) => state?.user?.user);
const dispatch= useDispatch()
  return (
    <>
    <div className="add-post">
        <div className='add-post-img-zone'>
        <img src="" alt="" />
        <img style={{borderRadius:"50%" ,width:'50px' ,backgroundColor:"#F8CBA6",margin:"10px 0" }} src="assets/nader2.png" alt="" />
        <input  type="text" placeholder={`What's happening`}  
                  onChange={(e) => setPostContent(e.target.value)}
                  />
        </div>
     
        <div className="upload-zone">
        <i className="uil uil-image"></i>
        <span>photo</span>
        <i className="uil uil-video"></i>
        <span style={{color:"blue"}}>Video</span>
        <button
           onClick={() => {
            dispatch(
              createAddPost({
                postContent:postContent,
                firstname: user?.firstname,
                lastname: user?.lastname,
                // date: new Date(),
                user_id: user?._id,
              })
            );}}
             >Share</button>
        </div>
        <PostDetails/>
        <PostDetails/>

    </div>
    </>
  )
}

export default AddPost