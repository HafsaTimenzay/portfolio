import React from 'react'
import '../App.css'
import Logo from '../assets/logo.svg'
import Profile from '../assets/profile.jpg'

const index = () => {
  return (
    <div className="profile_code">
      <div className="logo">
        <img src={Logo} alt="logo" width={60} />
        <h2>Hafsa Timenzay</h2>
      </div>
      <div className="profile-img">
        <img src={Profile} alt="" />
      </div>
      <h2>Web & Mobile Developer</h2>
      <div className="social-media">
        <div></div>
      </div>
      <button>Let's Work Together!</button>
    </div>
  )
}

export default index
