import {configureStore} from '@reduxjs/toolkit';
import postSlice from './addPostSlice/postSlice';
import userSlice from './userSlice/userSlice';
export const store =configureStore({
    reducer:{
        user:userSlice,
      post:postSlice,
    }
})