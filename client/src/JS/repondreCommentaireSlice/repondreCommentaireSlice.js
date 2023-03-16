import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//get repondreCommentaire
export const getRepondreCommentaire = createAsyncThunk("repondreCommentaire/get", async () => {
  try {
    let result = await axios.get(`http://localhost:5000/repondreCommentaire/all`);
    console.log(result.data.repondreCommentaire, "repondreCommentaire get");
    return result.data;
  } catch (error) {
    console.log(error);
  }
});
//add repondreCommentaire
//update repondreCommentaire
export const updateRepondreCommentaire = createAsyncThunk(
  "poduct/update/",
  async ({ repondreCommentaire, id }) => {
    try {
      let result = await axios.put(
        `http://localhost:5000/repondreCommentaire/update/${id}`,
        repondreCommentaire
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const createRepondreCommentaire = createAsyncThunk(
  "repondreCommentaire/add",
  async (repondreCommentaire) => {
    try {
      let result = await axios.post(
        `http://localhost:5000/repondreCommentaire/add`,
        repondreCommentaire
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  repondreCommentaire: null,
  status: null,
};

export const repondreCommentaireSlice = createSlice({
  name: "repondreCommentaire",
  initialState,
  reducers: {},
  extraReducers: {
    //get repondreCommentaire
    [getRepondreCommentaire.pending]: (state) => {
      state.status = "loading";
    },
    [getRepondreCommentaire.fulfilled]: (state, action) => {
      state.status = "fullfieled";
      state.repondreCommentaire = action.payload.repondreCommentaire;
    },
    [getRepondreCommentaire.rejected]: (state) => {
      state.status = "failed";
    },
    //add repondreCommentaire
    [createRepondreCommentaire.pending]: (state) => {
      state.status = "loading";
    },
    [createRepondreCommentaire.fulfilled]: (state, action) => {
      state.status = "fullfieled";
      state.repondreCommentaire = [action.payload.repondreCommentaire, ...state.repondreCommentaire];
      return state;
    },
    [createRepondreCommentaire.rejected]: (state) => {
      state.status = "failed";
    },

    //update repondreCommentaire
    [updateRepondreCommentaire.pending]: (state) => {
      state.status = "loading";
    },
    [updateRepondreCommentaire.fulfilled]: (state, action) => {
      state.status = "fullfieled";
    },
    [updateRepondreCommentaire.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default repondreCommentaireSlice.reducer;
