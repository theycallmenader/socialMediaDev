import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const PersonelInfo = () => {

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
                                    <Dialog open={open} onClose={handleClose}>
                                          <DialogTitle>Update your info</DialogTitle>
                                          <DialogContent>
                                            <DialogContentText>You can change your info here</DialogContentText>
                                            <TextField
                                              autoFocus
                                              margin="dense"
                                              id="firstName"
                                              label="First Name"
                                              type="string "
                                              fullWidth
                                              variant="standard"
                                            />
                                             <TextField
                                              autoFocus
                                              margin="dense"
                                              id="Last Name"
                                              label="Last Name"
                                              type="string"
                                              fullWidth
                                              variant="standard"
                                            />
                                             <TextField
                                              autoFocus
                                              margin="dense"
                                              id="status"
                                              label="status"
                                              type="string"
                                              fullWidth
                                              variant="standard"
                                            />
                                             <TextField
                                              autoFocus
                                              margin="dense"
                                              id="lives"
                                              label="lives"
                                              type="string"
                                              fullWidth
                                              variant="standard"
                                            />
                                          </DialogContent>
                                          <DialogActions>
                                            <Button onClick={handleClose}>Cancel</Button>
                                            <Button onClick={handleClose}>Modify</Button>
                                          </DialogActions>
                                    </Dialog>
                                </div>
                                <div className="info-update-icon-pers">
                                    <h2>Status </h2> <h3>in RelationShip</h3> 
                                </div>
                                <div className="info-update-icon-pers">
                                    <h2>Lives </h2> <h3>in Tounes</h3> 
                                </div>
                                <div className="info-update-icon-pers">
                                    <h2>Works at </h2> <h3>in Tounes</h3> 
                                </div>
                              </div>
    </>
  )
}

export default PersonelInfo