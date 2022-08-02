import React from 'react'
import './Navbar.css'
import NavBarItems from './NavBarItems';

const NavItems = [
    {name: "Dashboard", icon: "icons/dashboard.png"},
    {name: "Analytics", icon:"icons/statistics.png"},
     {name: "Post",icon:"icons/save-for-later.png"},
      {name: "Settings",icon:"icons/cogwheel.png"},
      
      {name: "Logout",icon:"icons/logout.png"}
    ]


export default function Navbar() {
  return (
    <div className='navBar'>
        <NavBarItems item={NavItems} />
    </div>
  )
}
