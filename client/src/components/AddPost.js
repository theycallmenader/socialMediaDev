import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../JS/postSlice/postSlice';
import PostDetails from './PostDetails'
import { useLocation, useNavigate } from "react-router";

const AddPost = ({ping,setPing}) => {
  const [postContent, setPostContent] = useState("");
  const user = useSelector((state) => state?.user?.user);
const dispatch= useDispatch()
const post = useSelector((state) => state?.post?.post);
const location = useLocation();

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
              createPost({
                postContent:postContent,
                firstname: user?.firstname,
                lastname: user?.lastname,
                user_id: user?._id,
              })
            )
            setPing(!ping);}}
             >Share</button>
        </div>
      {location.pathname.includes("/homepage") ? <>
      {post?.map((el)=> <>
        <PostDetails el={el}/>
        </>).reverse()
      }

      </> : <>
      {post?.filter(el=>el?.user_id == user?._id).map((el)=> <>
        <PostDetails ping={ping} setPing={setPing} el={el}/>
        </>).reverse()
      }

      </>  }

    
    </div>
    </>
  )
}

export default AddPost