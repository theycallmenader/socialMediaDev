const express=require('express');
const postRouter = express.Router();

const post = require('../models/post');


//* Add post */
postRouter.post("/addPost", async (req, res) => {
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
            { $set: { postContent: req.body.postContent } },
            { new: true }
          );
          res.send({ modifiedPost: result, msg: "Your post modified successfully" });
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