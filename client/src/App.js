import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import LoginRegister from './pages/LoginRegister';
import Userprofile from './pages/Userprofile';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUser, userCurrent } from './JS/userSlice/userSlice';
function App() {
  const user = useSelector((state) => state?.user?.user);
  const isAuth = localStorage.getItem("token");
  const [ping, setPing] = useState(false);
  const dispatch = useDispatch();

    useEffect(() => {
      if (isAuth) {
  dispatch(userCurrent());
  dispatch(getUser());
      }
      
    
    }, [dispatch, isAuth, ping]);

  return (
    <div className="App">
      <div className="header"></div>
      <Routes>
        {/* <Route exact path="/login" element={<Login/>} /> */}
        <Route exact path="/loginregister" element={<LoginRegister/>} />
        <Route exact path="/profile" element={<Userprofile/>} />
      </Routes>
    </div>
  );
}

export default App;
