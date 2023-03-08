import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import LoginRegister from './pages/LoginRegister';
function App() {
  return (
    <div className="App">
      <div className="header"></div>
      <Routes>
        {/* <Route exact path="/login" element={<Login/>} /> */}
        <Route exact path="/loginregister" element={<LoginRegister/>} />
        
      </Routes>
    </div>
  );
}

export default App;
