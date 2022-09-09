import React from 'react'
import { Link } from 'react-router-dom'
// import Pic from"./mycomponents/download.jpeg"
const Header = () => {
  return (
    <div>
      <nav className="navbar navi navbar-expand-lg ">
            <div className=" text-uppercase  container-fluid">
              <a  href="#" >
                <img   src="./images/download.jpeg" alt="" width="55" height="55" class="d-inline-block align-text-top imgi"  />
            </a>
              <a className="navbar-brand ms-3 mb-1.5 head" href="#" > Panda's Freindship</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon " onclick="func1()"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ms-11">
                
                  <li className="nav-item ">
                    <a className="nav-link" aria-current="page" href="#">Home</a>

                  </li> 
                   <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">explore</a>
                  </li>
                  {/*
                  <li className="nav-item">
                    <a className="nav-link" href="#">services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">reviws</a>
  </li>*/}
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#">contact</a>
                  </li>  */}
                  
                
                </ul>
            
                  <button type="button" class="btn btn-outline-secondary me-3">Login</button>

              </div>
            </div>
          </nav>

    </div>
  )
}

export default Header
