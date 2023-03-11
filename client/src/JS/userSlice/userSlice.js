import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const userRegister=createAsyncThunk("user/register",async ()=>{
  try {
    let response = await axios.post("http://localhost:6000/user/register",
    user
    );
    return await response;
  } catch (error) {
    console.log(err)
  }


const initialState = {
  user:null,
  status:null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: {
    [userRegister.pending]: (state) => {
      state.status = 'loading';
  },
  [userRegister.fulfilled]: (state, action) => {
    state.status ='success';
    state.user = action.payload.data.user;
    localStorage.setItem('token', action.payload.data.token);
  },
  [userRegister.rejected]: (state) => {
    state.status = 'failed';
  },
}
})
}

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer