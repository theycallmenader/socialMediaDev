import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createCommentaire } from '../JS/commentaireSlice/commentaireSlice';
import { updatePost } from '../JS/postSlice/postSlice';

const AddCommentaire = ({el}) => {
    const [commentaireContent, setCommentaireContent] = useState("");

  const [showaddBtn, setShowaddBtn] = useState(true);
  const dispatch= useDispatch()
  const user = useSelector((state) => state?.user?.user);
  const post = useSelector((state) => state?.post?.post);
   
  return (
    <div>
        {showaddBtn && (
            <div className="emoj__anull__confir">
              {/* <i class="uil uil-grin-tongue-wink-alt"></i> */}

              <div className="anuul__conf__btn">
                <button
                  className="annuler__btn"
                  onClick={() => {
                    setShowaddBtn(false);
                    setCommentaireContent("");
                  }}
                >
                  Annuler
                </button>
                {commentaireContent === "" ? (
                  <button
                    style={{
                      backgroundColor: "#e5e3e53c",
                      color: "black",
                    }}
                    className="confirme__btn"
              
                    disabled={commentaireContent === ""}
                  >
                    Ajouter un commentaire
                  </button>
                ) : (
                  <button
                    className="confirme__btn"
                    onClick={() => {
                      {
                            dispatch(
                              createCommentaire({
                                content: commentaireContent,
                                user_id: user?._id,
                                product_id: el?._id,
                                name: user?.name,
                                lastname: user?.lastname,
                                user_img: user?.image,
                                date: new Date(),
                                // repondre_id: unique_id,
                              })
                            );
                            setTimeout(() => {
                              dispatch(
                                updatePost({
                                  ...post,
                                  id: el._id,
                                
                                })
                              );
                            }, 500);
                          
                      }

                      {
                        setCommentaireContent("");
                      }
                    }}
                  >
                    Ajouter un commentaire
                  </button>
                )}
              </div>
            </div>
          )}
    </div>
  )
}

export default AddCommentaire