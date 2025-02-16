import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Logo from './assets/logo.svg'
import Profile from './assets/profile.jpg'

const ProfileCard = () => {
  return (
    <div className="profile_card d-flex flex-column gap-1 align-items-center pt-4">
      <div className="row logo pb-0 mb-0">
        <div className="col-3">
          <img src={Logo} alt="logo" width={75} />
        </div>
        <div className="col-9">
          <h2 className='name'>Hafsa Timenzay</h2>
        </div>
      </div>
      <div className="profile-img pt-0 pb-4">
        <img src={Profile} alt="" />
      </div>
      <h3 className='text-bold pb-4'>Web & Mobile Developer</h3>
      <div className="social-media d-flex justify-content-center gap-3 pb-4">
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="media-icon bi bi-github"></i>
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="media-icon bi bi-twitter"></i>
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="media-icon bi bi-linkedin"></i>
        </a>
        <a href="https://www.freelancer.com/u/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="media-icon bi bi-person-workspace"></i> {/* No Freelancer icon, using person-workspace */}
        </a>
      </div>
      <button className='btn btn-primary linkBtn'>Let's Work Together!</button>
    </div>
  )
}

export default ProfileCard
