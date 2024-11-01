import React from 'react'
import './header.css'
import logo from '../images/logo.png' // relative path to image 
export default function Header() {
  return (
  <header>
    <nav>
        <div className="left">
        <li>
            <a href="" >
                products
            </a>
        </li>
        <li>
            <a href="">
             home
            </a>
        </li>
        </div>
       <div className="right">
        <a href="" className='logo'>
            <img src={require('../images/logo.png')} alt="" />
        </a>
       </div>

    </nav>
  </header>
  )
}
