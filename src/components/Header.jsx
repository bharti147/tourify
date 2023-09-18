import React,{useState} from 'react'
import '../styles/Header.scss'

import { FaRegUserCircle,FaBars,FaTimes} from "react-icons/fa";

function Header() {

  const[isClicked,setIsClicked]=useState(false);
  const clickClose = ()=>{
    setIsClicked(true);
    console.log("close")
  }
  const clickOpen = ()=>{
    setIsClicked(false);
    console.log("open")
  }
  return (
    <nav>
      <h1>Tourify</h1>
      <div className='bars'>

      
      <h2 className='icons'> {isClicked?<FaBars  onClick={clickOpen}/>:<FaTimes  onClick={clickClose} />}</h2>&nbsp;&nbsp;
      </div>
      {isClicked?<p></p>:  <main>
      <p>Discover</p>
      <p>Services</p>
      <p>My Trips</p>
      <p>Contact</p>
      </main>}
    
      {/* <h2 className='icons user'><FaRegUserCircle/></h2> */}
    </nav>
  )
}

export default Header
