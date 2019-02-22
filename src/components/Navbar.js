import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div class='nav-wrapper teal '>
        <Link to='/' class='brand-logo left hide-on-small-and-down'>
          Movie DB
        </Link>
        <ul class='right'>
          <li>
            <NavLink to='/top'>Top Movie</NavLink>
          </li>
          <li>
            <NavLink to='/popular'>Popular Movie</NavLink>
          </li>
          <li>
            <NavLink to='/upcoming'>Upcoming</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
