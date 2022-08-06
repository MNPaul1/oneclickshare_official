import React from 'react'
import { Avatar} from '@mui/material';
import "./Header.css"

export default function Header() {
  return (
    <div className='Header'>
    <h1 className='overview'>Overview</h1>
    <div className="avatar">
    <Avatar
                sx={{
                backgroundColor: 'black',
                height: 56,
                width: 56,
                margin:3,
                }}
                src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            >
    </Avatar>
    <p>Mahan</p>
    </div>
    </div>
  )
}
