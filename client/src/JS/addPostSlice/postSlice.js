import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



//add addPost
export const createAddPost = createAsyncThunk(
  "addPost/add",
  async (addPost) => {
    try {
      let result = await axios.post(
        `http://localhost:5000/post/addPost`,
        addPost
      );
      // console.log(result.data)
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);


const initialState = {
  addPost: null,
  status: null,
};

export const addPostSlice = createSlice({
  name: "addPost",
  initialState,
  reducers: {},
  extraReducers: {
    //add addPost extra reducers
    [createAddPost.pending]: (state) => {
      state.status = "loading...";
    },
    [createAddPost.fulfilled]: (state, action) => {
      state.status = "success";
      //console.log("=========",action.payload);
      state.addPost = [...state.addPost, action.payload.addPost];
      return state;
    },
    [createAddPost.rejected]: (state) => {
      state.status = "fail";
    },

  },
});

export default addPostSlice.reducer;
