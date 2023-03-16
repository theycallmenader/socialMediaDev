import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
// import { modifyLikeBtn } from '../JS/postDeatils/postDetailsSlice'
import '../styles/postDetails.css'
import InputEmoji from "react-input-emoji";
import { createCommentaire } from '../JS/commentaireSlice/commentaireSlice';
import AddCommentaire from './AddCommentaire';


const PostDetails = ({el}) => {
  function handleOnEnter(commentaireContent) {
    console.log("enter", commentaireContent);
  }
  const [likeCount, setLikeCount] = useState(50);
  const [redHeart, setRedHeart] = useState(false)
  const [commentaireContent, setCommentaireContent] = useState("");
  const [showaddBtn, setShowaddBtn] = useState(true);
  
  const [activeBtn, setActiveBtn] = useState("none");
  const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }
 
    if (activeBtn === 'like'){
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }
  };
  const dispatch= useDispatch()
  const user = useSelector((state) => state?.user?.user);
const post = useSelector((state) => state.post?.post);
console.log(post,'pooost')

  return (
    <>
    <div className='post-details'>
        <img src="assets/posttest.jpg" alt="" className='postImage' />
        <div className="like-comment-share">
          {!redHeart? <>
            <img src='assets/default-heart.png' className='default-heart' alt='' onClick={()=>setRedHeart(!redHeart)}/>

          </> : <>
          <img src='assets/heart.png' className='default-heart' alt='' onClick={()=>setRedHeart(!redHeart)}/>

          </>}
        <i class="uil uil-comment-alt-dots"></i>
        <i class="uil uil-share" style={{marginLeft:'25px'}}></i>
        </div>
        <p>2000 like</p>
        <div className="name-content">
        <h3>{el?.firstname} {el?.lastname}</h3>
        <InputEmoji
            maxLength={100}
            height={10}
            onResize
            // fontSize={50}
            value={commentaireContent}
            onClick={() => setShowaddBtn(true)}
            onChange={setCommentaireContent}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Type a message"
          />
  
  <button       onClick={() => {
                      {
                        {post.filter((el) => el.post_id).map((el) => 
                          dispatch(
                            createCommentaire({
                              content: commentaireContent,
                              user_id: user?._id,
                              post_id: el?._id,
                              firstname: user?.firstname,
                              lastname: user?.lastname,
                              user_img: user?.image,
                              
                              // repondre_id:
                            }),

                          )
                          )}
                       
                       
                        
                         
                      }
                    }}>add</button>
  
            {/* // <AddCommentaire  el={el} /> */}
          
  
        </div>
        </div>
    </>
  )
}

export default PostDetails