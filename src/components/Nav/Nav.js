import React from 'react'
import {AiFillHome} from "react-icons/ai"
import {BsPeopleFill} from "react-icons/bs"
import {RiFileList3Line} from "react-icons/ri"
import {BsChatText} from "react-icons/bs"
import logo from '../../assets/logo.png'
import './Nav.css';
export const Nav = () => {
  return (
   <nav>
    <div className="nav_items" >
    <div className='nav_item nav-1'><AiFillHome className='btn-i'/> <div className="nav_h">Home</div> </div>
    <div className='nav_item '><BsPeopleFill className='btn-i'/> <div className="nav_h">Profile</div></div>
    <div className='nav_item nav-12'> <img src={logo} className='logo-i'/> </div>
    <div className='nav_item nav-1'><RiFileList3Line className='btn-i'/> <div className="nav_h">Follow List</div></div>
    <div className='nav_item nav-1'><BsChatText className='btn-i'/> <div className="nav_h">Chat</div></div>

    </div>
   </nav>
  )
}
