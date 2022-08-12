import React, {useState} from 'react'
import './Analytics.css'
import AnalyticsGraph from './analyticsComponents/AnalyticsGraph'
import AnalyticsAccountDetails from './analyticsComponents/AnalyticsAccountDetails'

const demoYoutTubeData = ["500k", "29k", "55h", "1m"]
const YouTubeLabelList = ["Subscribers", "Last month", "Watch time", "Views"]

const demoTopYouTubeContent = [
  {0:{title:"How to open door?", views:"20M"}},
  {1:{title:"How to drink water?", views:"100M"}},
  {2:{title:"How to wash dishes?", views:"25M"}},
  {3:{title:"How to close door?", views:"52M"}}
]

const demoInstagramData = ["50k", "2k", "5", "150k"]
const InstagramLabelList = ["Followers", "Last month", "Followings", "Views"]

const demoTopInstagramContent = [
  {0:{title:"Me and Myself", views:"20K"}},
  {1:{title:"Hello World", views:"10K"}},
  {2:{title:"My life is amazing", views:"25K"}},
  {3:{title:"Ryan is the best teacher", views:"52K"}}
]
const label = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
const YouTubeNewFollowers = [1000,2500,4500,2000,6000,3500]
const InstagramNewFollowers = [100,200,0,200,60,300]

export default function Analytics() {
  const [demoContent,setDemoContent] = useState(demoTopYouTubeContent);
  const [LabelList,setLabelList] = useState(YouTubeLabelList);
  const [demoData,setdemoData] = useState(demoYoutTubeData);
  const [Title, setTitle] = useState("YouTube");
  const [followers, setFollowers] = useState(YouTubeNewFollowers);

  const contentHndler = () =>{
    if (LabelList[0]==="Subscribers") {
      setTitle("Instagram");
      setDemoContent(demoTopInstagramContent)
      setLabelList(InstagramLabelList)
      setdemoData(demoInstagramData)
      setFollowers(InstagramNewFollowers)
    } else {
      setTitle("YouTube");
      setFollowers(YouTubeNewFollowers)
      setDemoContent(demoTopYouTubeContent)
      setLabelList(YouTubeLabelList)
      setdemoData(demoYoutTubeData)
    }
  }
  return (
    <div className="analyticscontainer">
      <h1 className="AnalyticsPlatformName">{Title}</h1>
      <div className="AnalyticsGraph">
        <AnalyticsGraph title={Title} label = {label} followers={followers}/>
      </div>
      <div className="AnalyticsAccountDetails">
        <AnalyticsAccountDetails content = {demoContent} LabelList={LabelList} Data={demoData}/>
      </div>

      <div className="AnalyticsPrevPlatform" onClick={contentHndler}>❮</div>

      <div className="AnalyticsNextPlatform" onClick={contentHndler}>❯</div>
    </div>
  )
}