import React from 'react'
import "./Navbar.css"
import profile from "./assests/freelancers/albert.png"

function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <a href='/'>Logo</a>
      </div>
      <div className='nav-search'>
        <input className='nav-search-input' type="text" placeholder=""></input>
        <button className='nav-search-btn'><i className='fa fa-search'/></button>
      </div>
      <div className='nav-links'>
        <a href='/home'>Post Project</a>
        <a href='/home'>Search Project</a>
        <a href='/home'><i className='fa-regular fa-message'/></a>
        <a href='/home'><i className='fa-regular fa-heart'/></a>
        <div className='nav-profile'>
            <div className='nav-profile-img'>
                <img src={profile} alt=''></img>
            </div>
            <i className='fa fa-angle-down'/>

        </div>
      </div>
    </div>
  )
}

export default Navbar
