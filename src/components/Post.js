import React from 'react'
import Navbar from './Navbar'
import './Post.css'
import PostComposer from './postComponents/PostComposer'
import PostPreview from './postComponents/PostPreview'


export default function Post() {
  return (
    <>


    <Navbar />
    <div className='postcontainer'>
      <div className="postcomposer">
        <PostComposer />
      </div>
      <div className="postpreview">
        <PostPreview />
      </div>
    </div>
    </>
  )
}
