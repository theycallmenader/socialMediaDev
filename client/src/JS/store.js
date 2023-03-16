import {configureStore} from '@reduxjs/toolkit';
import postSlice from './postSlice/postSlice';
import userSlice from './userSlice/userSlice';
import commentaireSlice from "./commentaireSlice/commentaireSlice";
import  repondreCommentaireSlice  from "./repondreCommentaireSlice/repondreCommentaireSlice";

export const store =configureStore({
    reducer:{
        user:userSlice,
      post:postSlice,
      commentaire: commentaireSlice,
      repondreCommentaire: repondreCommentaireSlice,
    }
})