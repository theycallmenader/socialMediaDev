import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//get commentaire
export const getCommentaire = createAsyncThunk("commentaire/get", async () => {
  try {
    let result = await axios.get(`http://localhost:5000/commentaire/all`);
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

//add commentaire
export const createCommentaire = createAsyncThunk(
  "commentaire/add",
  async (commentaire) => {
    try {
      let result = await axios.post(
        `http://localhost:5000/commentaire/add/`,
        commentaire
      );
      // console.log(result.data)
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//update commentaire
export const updatCommentaire = createAsyncThunk(
  "commentaire/update",
  async ({ id, commentaire }) => {
    try {
      console.log(commentaire);
      let result = axios.put(
        `http://localhost:5000/commentaire/update/${id}`,
        commentaire
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//delet commentaire
export const deleteCommentaire = createAsyncThunk(
  "commentaire/delete",
  async ({ id }) => {
    try {
      let result = await axios.delete(
        `http://localhost:5000/commentaire/delete/${id}`
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  commentaire: null,
  status: null,
};

export const commentaireSlice = createSlice({
  name: "commentaire",
  initialState,
  reducers: {},
  extraReducers: {
    //add commentaire extra reducers
    [createCommentaire.pending]: (state) => {
      state.status = "loading...";
    },
    [createCommentaire.fulfilled]: (state, action) => {
      state.status = "success";
      //console.log("=========",action.payload);
      state.commentaire = [...state.commentaire, action.payload.commentaire];

      return state;
    },

    [createCommentaire.rejected]: (state) => {
      state.status = "fail";
    },
    //get commentaire extra reducers
    /////////////get commentaire////////////////////////
    [getCommentaire.pending]: (state) => {
      state.status = "loading";
    },
    [getCommentaire.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      // state.msg = action.payload.data.msg;
      state.commentaire = action.payload.commentaire;
    },
    [getCommentaire.rejected]: (state) => {
      state.status = "failed";
    },

    ///////////update commentaire///////////
    [updatCommentaire.pending]: (state) => {
      state.status = "pending";
    },
    [updatCommentaire.fulfilled]: (state) => {
      state.status = "fullfilled";
    },
    [updatCommentaire.rejected]: (state) => {
      state.status = "rejected";
    },
    /////////////delet commentaire//////////////
    [deleteCommentaire.pending]: (state) => {
      state.status = "pending";
    },
    [deleteCommentaire.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      console.log(action.payload);
    },
    [deleteCommentaire.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default commentaireSlice.reducer;
