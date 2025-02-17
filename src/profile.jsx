import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import useTheme from "./useTheme"; // Import du hook
import LogoLight from './assets/logo_light.svg'
import LogoDark from './assets/logo_dark.svg'
import Profile from './assets/profile.jpg'

const ProfileCard = () => {
  const { theme } = useTheme();
  const [logo, setLogo] = useState(theme === 'light' ? LogoLight : LogoDark);

  useEffect(() => {
    // Change le logo dès que le theme change
    setLogo(theme === 'light' ? LogoLight : LogoDark);
    console.log(theme)
  }, [theme]); // Déclenche un changement quand le theme est modifié  console.log(theme)

  return (
    <div className="profile_card d-flex flex-column gap-1 align-items-center pt-4">
      <div className="row logo pb-0 mb-0">
        <div className="col-3">
          <img src={logo} alt="logo" width={75} />
        </div>
        <div className="col-9">
          <h2 >Hafsa Timenzay</h2>
        </div>
      </div>
      <div className="profile-img pt-0 pb-4">
        <img src={Profile} alt="" />
      </div>
      <h3 className='text-bold pb-4'>Web & Mobile Developer</h3>
      <div className="social-media d-flex justify-content-center gap-3 pb-4">
        <a href="https://github.com/HafsaTimenzay" target="_blank" rel="noopener noreferrer">
          <i className="media-icon bi bi-github"></i>
        </a>
        <a href="https://x.com/timenzay1337" target="_blank" rel="noopener noreferrer">
          <i className="media-icon bi bi-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/hafsa-timenzay-698b72293/" target="_blank" rel="noopener noreferrer">
          <i className="media-icon bi bi-linkedin"></i>
        </a>
        <a href="https://www.freelancer.com/u/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="media-icon bi bi-person-workspace"></i> {/* No Freelancer icon, using person-workspace */}
        </a>
      </div>
      <button className='btn btn-primary linkBtn'>
        <a className='link' href="#">Let's Work Together!</a>
      </button>
    </div>
  )
}

export default ProfileCard
