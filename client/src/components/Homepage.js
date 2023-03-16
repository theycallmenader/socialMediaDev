import React from 'react'
import PostDetails from './PostDetails'
import '../styles/homepage.css'
const Homepage = () => {
  
  
  
  const nav=document.querySelector('#nav');
  const onScroll=() => {
    const scrollPosition= window.scrollOffsetY;
    nav
      .classList
      .toggle(
        "scrolled-down",
        scrollPosition>56
      );
  };

  document.addEventListener(
    "scroll",
    onScroll,{
      passive:true
    }
  );
  
  
  return (
    
    <>
     <nav id='nav' className='container'>
      <img src='assets/logo.png'/>
      <div className='links'>
        <a>Home</a>
        <a>Profile</a>
        <a>Settings</a>
        <a>ABOUT</a>
      </div>
      </nav>   
      
    </>
    
  )
}

export default Homepage