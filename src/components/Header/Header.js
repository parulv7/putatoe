import React from 'react'
import {HiLocationMarker}  from "react-icons/hi";
import {BsFillBellFill} from "react-icons/bs";
import {BiCartAdd }from "react-icons/bi"
import {AiOutlineSearch} from "react-icons/ai"
import {MdKeyboardVoice} from "react-icons/md"
import "./Header.css"
const Header = () => {
  return (
    <>
    <div className='header'>
<div className='upper'>
    
<div className='btn'><HiLocationMarker/></div>
    <input className='location_in' placeholder='kanpur, uttar pradesh' type='text' id='location' name='location' />
    <div className='btn'><BsFillBellFill/></div>
    <div className='btn'><BiCartAdd/></div>
   
</div>
<div className='below'>
<div className='in'>
<AiOutlineSearch className='btn blue'/>
<input className='location_in2' type='text' id='location' placeholder='search for product' name='location' />
</div>

 <div className='btn'><MdKeyboardVoice/> </div>
<div className='btn '><button className='slbutton'>Sign in</button> </div>
<div className='btn '><button className='slbutton'>Log in</button> </div>
</div>
</div>
    </>
  )
}

export default Header