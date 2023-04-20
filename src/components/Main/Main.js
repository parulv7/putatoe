import React from 'react'
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img2.jpeg'
import img3 from '../../assets/img3.jpeg'
import img4 from '../../assets/img4.jpeg'
import img5 from '../../assets/img5.jpeg'
import img6 from '../../assets/img6.jpeg'
import img7 from '../../assets/img7.jpeg'
import img8 from '../../assets/img8.jpeg'
import img9 from '../../assets/img9.jpeg'
import img10 from '../../assets/img10.jpeg'
import img11 from '../../assets/img11.jpeg'
import logo from '../../assets/logo.png'
import './Main.css'
const Main = () => {
  return (
    <main>
    <div className='maain_con'>
    <div className='container'>
        <img src={img1} />
        <div className='con_text'>Prepaid Mobile Recharge</div>
    </div>
    <div className='container'>
        <img src={img2} />
        <div className='con_text'>DTH Recharge</div>
    </div>
    <div className='container'>
        <img src={img3} />
        <div className='con_text'>Loans</div>
    </div>
    <div className='container'>
        <img src={img4} />
        <div className='con_text'>Promotion</div>
    </div>
    <div className='container'>
        <img src={img5} />
        <div className='con_text'>News</div>
    </div>
    <div className='container'>
        <img src={img6} />
        <div className='con_text'>Blog</div>
    </div>
    <div className='container'>
        <img src={img7} />
        <div className='con_text'>Jobs</div>
    </div>
    <div className='container'>
        <img src={img8} />
        <div className='con_text'>Anonymous Feedback</div>
    </div>
    <div className='container'>
        <img src={img9} />
        <div className='con_text'>Gas Booking</div>
    </div>
    <div className='container'>
        <img src={img10} />
        <div className='con_text'>Electricity Bill</div>
    </div>
    <div className='container'>
        <img src={img11} />
        <div className='con_text'>Water Bill</div>
    </div>
    </div>


    <span className='con_head_m'>
        <div className='con_head'> Popular Services Products</div>
    </span>
    <span className='con_head_m'>
        <div className='con_head'>All Popular Service Providers</div>
    </span>
    <span className='con_head_m'>
        <div className='con_head'>Service We Provide</div>
    </span>
    <span className='con_head_m'>
        <div className='con_head'>Service We Provide</div>
    </span>
    <div className='stick'>
<img src={logo} />
    </div>
    </main>
  )
}

export default Main