import React from 'react'

export default function NavBarItems(props) {
  return (
    <>
    {
        props.item.map((item, index)=>(    
            <div key={index} className = {`NavItem ${item['name']}`}>
                <img src={item['icon']} alt={item['name']} />
                <span>{item['name']}</span>       
            </div>    
        ))
    }    
    </>
  )}
