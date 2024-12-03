import React from 'react'

import { NavLink } from 'react-router-dom'
import { FaRegHeart, FaSearch, FaShoppingCart } from 'react-icons/fa'

const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="container">
          <div className="nav_box">
            <NavLink to={"/"} className="nav_logo">Exclusive</NavLink>
            <ul className="nav_list">
              <li>
                <NavLink to={"/home"} className="nav_link">Home</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} className="nav_link">Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/about"} className="nav_link">About</NavLink>
              </li>
              <li>
                <NavLink to={"/signup"} className="nav_link">Sign Up</NavLink>
              </li>
            </ul>
            <div className="nav_icons">
              <div className="nav_search">
                <label>
                  <input 
                    type="text"
                    placeholder="Search . . . "
                  />
                <FaSearch />
                </label>

              </div>
                <div className="nav_like">
                  <FaRegHeart />
              
                <div className="nav_shop">
                  <FaShoppingCart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
