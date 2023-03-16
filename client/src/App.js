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
import { getPost } from './JS/postSlice/postSlice';
import Homepage from './components/Homepage';
import PrivateRoute from './route/PrivateRoute';





function App() {
  const user = useSelector((state) => state?.user?.user);
  const post = useSelector((state) => state?.post?.post);
console.log(post,"hhhhh")
  const isAuth = localStorage.getItem("token");
  const [ping, setPing] = useState(false);
  const dispatch = useDispatch();

    useEffect(() => {
      if (isAuth) {
  dispatch(userCurrent());
  dispatch(getUser());

      }
      
  dispatch(getPost());
    
    }, [dispatch, isAuth, ping]);

  return (
    <div className="App">
      <div className="header"></div>
      <Routes>
        {/* <Route exact path="/login" element={<Login/>} /> */}
        <Route exact path="/loginregister" element={<LoginRegister/>} />
        <Route element={<PrivateRoute/>}>
          <Route exact path="/homepage" element={<Homepage/>}></Route>
          <Route exact path="/profile" element={<Userprofile/>}></Route>
        </Route>{" "}
      </Routes>
    </div>
  );
}

export default App;
