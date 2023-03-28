import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser,deleteUser } from '../JS/userSlice/userSlice';
import { useNavigate } from "react-router";

const PersonelInfo = ({ ping, setPing }) => {
    const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.user);
  console.log(user?._id,'idd')
  const users = useSelector((state) => state?.user?.users);
  console.log(users,"uuu")
  const [newUser, setNewUser] = useState({});
  const handleUpdate = (e) =>
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    }); 
  const [open,setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="profile-info">
        <div className="info-update-icon">
          <h2>Your Info</h2>
          <button variant="outlined" onClick={handleClickOpen}>
            <i className="uil uil-pen"></i>
          </button>
          <button variant="outlined">
            <i
              className="uil uil-trash"
              onClick={() => {
                  {
                  users?.map((el) => {
                     dispatch(
                       deleteUser({
                         id: user._id,
                         deleteUser,
                         // feedbacks: feedback.filter((el) => el == user._id),
                       })
                     );
                     setPing(!ping);
                    setTimeout(() => {
                      navigate('/')
                    }, 1500);
                    
                  });
                  }

               
              }}
            ></i>
          </button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Update your info</DialogTitle>
            <DialogContent>
              <DialogContentText>
                You can change your info here
              </DialogContentText>

              <TextField
                autoFocus
                margin="dense"
                id="firstName"
                name="firstname"
                label="First Name"
                type="string "
                fullWidth
                variant="standard"
                onChange={(e) => handleUpdate(e)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="Last Name"
                name="lastname"
                label="Last Name"
                type="string"
                fullWidth
                variant="standard"
                onChange={(e) => handleUpdate(e)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="status"
                label="status"
                name="status"
                type="string"
                fullWidth
                variant="standard"
                onChange={(e) => handleUpdate(e)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="lives"
                label="lives"
                name="lives"
                type="string"
                fullWidth
                variant="standard"
                onChange={(e) => handleUpdate(e)}
              />
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                onClick={() => {
                  setTimeout(() => {
                    dispatch(updateUser({ id: user?._id, user: newUser }));

                    setPing(!ping);
                  }, 1000);
                  {
                    handleClose();
                  }
                }}
              >
                Modify
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <div className="info-update-icon-pers">
          <h2>Status </h2> <h3>{user?.status}</h3>
        </div>
        <div className="info-update-icon-pers">
          <h2>Lives </h2> <h3>{user?.lives}</h3>
        </div>
        <div className="info-update-icon-pers">
          <h2>Works at </h2> <h3>in Tounes</h3>
        </div>
      </div>
    </>
  );
  }

export default PersonelInfo