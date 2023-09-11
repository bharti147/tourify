import React from 'react'
import '../styles/Header.scss'

import { FaRegUserCircle} from "react-icons/fa";

function Header() {
  return (
    <nav>
      <h1>Tourify</h1>
      <main>
      <p>Discover</p>
      <p>Services</p>
      <p>My Trips</p>
      <p>Contact</p>
      
      
      </main>
      <h1 className='icons'><FaRegUserCircle/></h1>
    </nav>
  )
}

export default Header
