import React from 'react'
import '../App.css'
import Logo from '../assets/logo.svg'

const index = () => {
  return (
    <div className="profile_code">
      <div className="logo">
        <img src={Logo} alt="logo" width={100} />
        <h2>Hafsa Timenzay</h2>
      </div>
    </div>
  )
}

export default index
