const express=require('express');
const postRouter = express.Router();
const post = require('../models/post');

const isAuth=require('../middleware/passport')
const {
  postRules,
  Validation,
} = require("../middleware/validator");
//* Like post */

postRouter.put("/like/:id",isAuth(),async (req, res) =>{
try {
  let post = await post.findById(req.params.id);
  // Check if the post has been already liked 
  if(post.postLikes.filter(like=>like.user.toString()=== req.user.id).length > 0) {
    return res.send({msg:'Post already liked'});
  }
  post.postLikes.unshift({user:req.user.id});

  await post.save();

  res.json(post.postLikes);
} catch (error) {
    console.error(error.message);
    res.status(500).send('server error')
}

});
//* GET POST BY ID USER *//
postRouter.get("/userPosts/:id", async (req, res) => {
  
  try {
    let result = await post.findById(req.params.id);
    res.send({
      posts: result,
      msg: "this is the user posts",
    });
  } catch (error) {
    console.log(error);
  }
});

//* Get All POSTS*/

postRouter.get("/getPosts", async (req, res) => {
  try {
    const result = await post.find();
    res.status(200).send({ post: result, msg: "all post" });
  } catch (error) {
    res.status(400).send({ msg: "can not find post" });
  }
});
//* Add post */
postRouter.post("/addPost",async (req, res) => {
    try {
      let newPost = new post(req.body);
      const result = await newPost.save();
      res.send({ post: result, msg: "your post has being published successfully" });
    } catch (error) {
      console.log(error);
    }
  });

//* Modify post*/
postRouter.put('/modifyPost/:id', async (req, res) => {
   try {
     let result = await post.findByIdAndUpdate(
       { _id: req.params.id },
       { $set: { ...req.body } },
       { new: true }
     );
     res.send({ newPost: result, msg: "Post updated" });
   } catch (error) {
     console.log(error);
   }
    });

//* Delete post*/
postRouter.delete('/deletePost/:id', async (req, res) => {
    try {
      let result = await post.findByIdAndDelete(req.params.id);
      res.send({ deletedPost: result, msg: "Your post deleted successfully" });
    } catch (error) {
      console.log(error);
    }
  });
module.exports =postRouter;