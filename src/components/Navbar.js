import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const NavItems = [
  {name: "Dashboard", icon: "icons/dashboard.png"},
  {name: "Analytics", icon:"icons/statistics.png"},
   {name: "Post",icon:"icons/save-for-later.png"},
    {name: "Logout",icon:"icons/logout.png"}
  ]


function HandleClick(e) {
  let elements = document.getElementsByClassName("NavItem");
  Array.from(elements).forEach(element => {
    element.classList.remove('active')
  });
  elements = document.getElementsByClassName(e.target.id)
  Array.from(elements).forEach(element => {
    element.classList.add('active')
  });
}



export default function Navbar() {
  return (
    <>
    <nav className='navBar'>
        {
          NavItems.map((item, index)=>(   
            <Link to={`/${item['name']}`} key={index} onClick={HandleClick} id={`${item['name']}`} className = {`NavItem ${item['name']} ${"/"+item['name']===window.location.pathname?"active":""}`}>
                <img src={item['icon']} alt={item['name']} id={`${item['name']}`}/>
                <span id={`${item['name']}`}>{item['name']}</span>       
            </Link>    
        ))
    } 
    </nav>
  </>
  )
}
