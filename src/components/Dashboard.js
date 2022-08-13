import React,{useState} from 'react';
import "./Dashboard.css";
import Barchart from './dashboardComponents/Barchart';
import UserProfile from './dashboardComponents/userProfile';
import LeftComponent from './dashboardComponents/LeftComponent';
import RightComponent from './dashboardComponents/RightComponent';
import Header from './dashboardComponents/Header';
import Navbar from './Navbar';

const instagramData = {
  name:"Mahan",
  username:"Mahan's Instga",
  followers: "123K Followers",
  following: "10 Following",
  posts:"25 Posts"
}
const youtubeData = {
  name:"Nandan",
  username:"Mahan's Tube",
  followers: "1.23M Subscribers",
  following: "10 Subscription",
  posts:"25 Video"
}

function HandleClick(selectedAcount) {
  let userinfo ={}
  // it is just a demo dataset which is subjected to change once we make api call and extract real data.
  if(selectedAcount==="INSTAGRAM"){
    userinfo =instagramData
  }else if(selectedAcount==="YOUTUBE"){
    userinfo =youtubeData
  }
  return userinfo;
  
}

export default function Dashboard() {
  const[accountSelected, setInfo] = useState("INSTAGRAM")
  //handle the button click switch between youtube and instagram user profile on click
  const youtubeHandler = (e) =>{
    //first I set the old element class and then update the class to current selected element
    document.getElementById(accountSelected).classList.remove("active")
    setInfo("YOUTUBE")
    document.getElementById(e.target.value).classList.add("active")
  }
  const instagramHandler = (e) =>{
    document.getElementById(accountSelected).classList.remove('active')
    setInfo("INSTAGRAM")
    document.getElementById(e.target.value).classList.add("active")
  }
  let userInfo = HandleClick(accountSelected)
  return (
    <>

    <Navbar />
    <div className='container'>
      <div className="Header">
        <Header />
      </div>
      
      {/* sub-header have two divs with different width one div use to show user followers and another one shows connected accounts */}
        <div className="LeftComponent" >
          <LeftComponent followers={{instagram:instagramData.followers, youtube:youtubeData.followers}}/>
        </div>
        <div className="RightComponent">
          <RightComponent />
        </div>
      
      
        <div className="Chart">
          
          <Barchart />
          <div className="options">
            <input type="button" value={"INSTAGRAM"} id={"INSTAGRAM"} className="active" onClick={instagramHandler}/>
            <input type="button" value={"YOUTUBE"} id={"YOUTUBE"} onClick={youtubeHandler}/>
          </div>
        </div>

        <div className="UserProfile">
          <UserProfile userinfo={userInfo}/>
        </div>
      </div>
    </>
  )
}
