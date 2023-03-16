import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//get post
export const getPost = createAsyncThunk("post/get", async () => {
  try {
    let result = await axios.get(`http://localhost:5000/post/getPosts`);
    console.log(result.data.post, "postget");
    return result.data;
  } catch (error) {
    console.log(error);
  }
});
//add post
//update post
export const updatePost = createAsyncThunk(
  "post/update/",
  async ({ post, id }) => {
    try {
      let result = await axios.put(
        `http://localhost:5000/post/modifyPost/${id}`,
        post
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const createPost=createAsyncThunk(
  "post/add",
  async(post)=>{
    try {
      let result=await axios.post(`http://localhost:5000/post/addPost`,post)
      return result.data
    } catch (error) {
      console.log(error)
    }
  }

)

//delet post
export const deletePost = createAsyncThunk("post/delete", async ({id}) => {
  try {
    let result =await axios.delete(`http://localhost:5000/post/deletePost/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  post: null,
  status: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    //get post
    [getPost.pending]: (state) => {
      state.status = "loading";
    },
    [getPost.fulfilled]: (state, action) => {
      state.status = "fullfieled";
      state.post = action.payload.post;
    },
    [getPost.rejected]: (state) => {
      state.status = "failed";
    },
//add post
    [createPost.pending]: (state) => {
      state.status = "loading";
    },
    [createPost.fulfilled]: (state, action) => {
      state.status = "fullfieled";
      state.post = [...state.post,action.payload.post];
    return state
    },
    [createPost.rejected]: (state) => {
      state.status = "failed";
    },

      //update post
    [updatePost.pending]: (state) => {
      state.status = "loading";
    },
    [updatePost.fulfilled]: (state, action) => {
      state.status = "fullfieled";
  
    },
    [updatePost.rejected]: (state) => {
      state.status = "failed";
    },
    [deletePost.pending]: (state) => {
      state.status = "pending";
    },
    [deletePost.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      console.log(action.payload);
    },
    [deletePost.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});



export default postSlice.reducer;
