import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
// import { modifyLikeBtn } from '../JS/postDeatils/postDetailsSlice'
import '../styles/postDetails.css'
import InputEmoji from "react-input-emoji";
import { createCommentaire } from '../JS/commentaireSlice/commentaireSlice';
import AddCommentaire from './AddCommentaire';
import { deletePost, updatePost } from '../JS/postSlice/postSlice';
import { useLocation} from "react-router";


const PostDetails = ({el,ping,setPing}) => {
  function handleOnEnter(commentaireContent) {
    console.log("enter", commentaireContent);
  }
  const [likeCount, setLikeCount] = useState(50);
  const [redHeart, setRedHeart] = useState(false)
  const [commentaireContent, setCommentaireContent] = useState("");
  const [showaddBtn, setShowaddBtn] = useState(true);
  const [newPost, setNewPost] = useState("");
  
    // const handleUpdate = (e) =>
    //   setNewPost({
    //     ...newPost,
    //   });
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
  const location=useLocation()
  const dispatch= useDispatch()
  const user = useSelector((state) => state?.user?.user);
const post = useSelector((state) => state.post?.post);
console.log(post,'pooost')

  return (
    <>
      <div className="post-details">
      <p>{el?.postContent}</p>
        <img src="assets/posttest.jpg" alt="" className="postImage" />

        <p>2000 like</p>
        
        <div className="like-comment-share">
          {!redHeart ? (
            <>
              <img
                src="assets/default-heart.png"
                className="default-heart"
                alt=""
                onClick={() => setRedHeart(!redHeart)}
              />
            </>
          ) : (
            <>
              <img
                src="assets/heart.png"
                className="default-heart"
                alt=""
                onClick={() => setRedHeart(!redHeart)}
              />
            </>
          )}
          <i class="uil uil-comment-alt-dots"></i>
      

          <i class="uil uil-share" style={{ marginLeft: "25px" }}></i>
          {location.pathname.includes("/profile") &&  <>
          <i       onClick={() => {
                          dispatch(
                            deletePost({
                              id: el._id,
                              deletePost,
                              // posts: post.filter((el) => el == user._id),
                            })
                          );
                          setPing(!ping)
                        }} class="uil uil-trash-alt" style={{ marginLeft: "25px",cursor:"pointer" }}></i>
          </>}
       
        </div>
        <div className="name-content">
          <h3>
            {el?.firstname} {el?.lastname}
          </h3>
          <input
            name="commentaireContent"
            type="text"
            placeholder='Write something!'
            onChange={(e) =>setNewPost(e.target.value) }
          />
          <button
            onClick={() => {
              {
                {
                  post.map((el) =>
                    // dispatch(
                    //   createCommentaire({
                    //     content: commentaireContent,
                    //     user_id: user?._id,
                    //     post_id: el?._id,
                    //     firstname: user?.firstname,
                    //     lastname: user?.lastname,
                    //     user_img: user?.image,
                    //     // repondre_id:
                    //   }),
                    // )
                    dispatch(
                      updatePost({
                        ...post,
                        id: el._id,
                        avatar: "gg",
                        post: {
                          ...el?.commentList.postComments,
                          commentList: {
                            firstname: user.firstname,
                            lastname: user.lastname,
                            postComments: newPost,
                          },
                          isLiked: false,
                        },
                        // commentList: [{ firstname: "hello" }],
                      })
                    )
                  );
                }
              }
            }}
          >
            add
          </button>

          {/* // <AddCommentaire  el={el} /> */}
        </div>
      </div>
    </>
  );
}

export default PostDetails