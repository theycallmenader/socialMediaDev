import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//register
export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/user/register", user);
    // console.log(result.data)
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

//login
export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/user/login", user);
    // console.log(result.data)
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

//current user
export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let result = await axios.get("http://localhost:5000/user/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    // console.log(result.data)
    return result.data;
  } catch (error) {
    console.log(error);
  }
});
console.log("result");

//update user
export const updateUser = createAsyncThunk(
  "user/update",
  async ({ id, user }) => {
    try {
      // console.log(user);
      let result = axios.put(`http://localhost:5000/user/update/${id}`, user);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//upload image

//get all users

//get users
export const getUsers = createAsyncThunk("/user/all", async () => {
  try {
    let result = await axios.get(`http://localhost:5000/user/all`);
    console.log(result.data.user, "users get");
    return result.data.users;
  } catch (error) {
    console.log(error);
  }
});

// add user

export const createUser = createAsyncThunk("user/add", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/user/add", user);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

//delet user
export const deleteUser = createAsyncThunk("user/delete", async ({ id }) => {
  try {
    let result = await axios.delete(`http://localhost:5000/user/delete/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});


const initialState = {
  user: null,
  status: null,
  users: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    //register extra reducers
    [userRegister.pending]: (state) => {
      state.status = "loading";
    },
    [userRegister.fulfilled]: (state, action) => {
      state.status = "success";
      //console.log("=========",action.payload);
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.token);
      return state;
    },
    [userRegister.rejected]: (state) => {
      state.status = "fail";
    },

    // login extra reducers
    [userLogin.pending]: (state) => {
      state.status = "loading";
    },
    [userLogin.fulfilled]: (state, action) => {
      state.status = "success";
      console.log("=========", action.payload);
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.token);
      return state;
    },
    [userLogin.rejected]: (state) => {
      state.status = "fail";
    },
    //*current user */
    [userCurrent.pending]: (state) => {
      state.status = "loading";
    },
    [userCurrent.fulfilled]: (state, action) => {
      state.status = "success";
      //console.log("=========",action.payload);
      state.user = action.payload?.user;
      return state;
    },
    [userCurrent.rejected]: (state) => {
      state.status = "fail";
    },

    ///////////update user///////////
    [updateUser.pending]: (state) => {
      state.status = "pending";
    },
    [updateUser.fulfilled]: (state) => {
      state.status = "fullfilled";
    },
    [updateUser.rejected]: (state) => {
      state.status = "rejected";
    },
    /////////////get all user////////////////////////
    //get users
    [getUsers.pending]: (state) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = "fullfieled";
      state.users = action.payload;
    },
    [getUsers.rejected]: (state) => {
      state.status = "failed";
    },

    //add user extra reducers
    [createUser.pending]: (state) => {
      state.status = "loading...";
    },
    [createUser.fulfilled]: (state, action) => {
      state.status = "success";
      //console.log("=========",action.payload);
      state.user = [action.payload.user, ...state.users];
      return state;
    },
    [createUser.rejected]: (state) => {
      state.status = "fail";
    },

    /////////////delet feedback//////////////
    [deleteUser.pending]: (state) => {
      state.status = "pending";
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      console.log(action.payload);
    },
    [deleteUser.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;
