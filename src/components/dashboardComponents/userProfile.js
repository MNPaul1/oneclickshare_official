import React from 'react'
import "./userProfile.css"


export default function UserProfile(props) {
  return (
    <>
    <div className="userinfo">
        <div style={{marginBottom: "15px", color:"#575B6E", fontWeight:"500"}}>User Profile</div>
        <div className="user-pf-name">
          <div></div> {/*user profile picture*/}
          <span style={{fontSize: "18px",color:"#11243D", fontWeight: "600"}}>{props.userinfo.name}</span>
          <span style={{fontSize: "13px",color:"#7E84A3"}}>@{props.userinfo.username}</span>
        </div>
        <div className="accountInfo">
            <p>{props.userinfo.followers}</p>
            <p>{props.userinfo.following}</p>
            <p>{props.userinfo.posts}</p>
        </div>
        <input type="button" value="View Profile" />
    </div>
    </>
  )
}
