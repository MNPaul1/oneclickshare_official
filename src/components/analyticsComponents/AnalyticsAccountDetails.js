import React from 'react'
import './AnalyticsAccountDetails.css'




export default function AnalyticsAccountDetails(props) {
  const LabelList = props.LabelList;
  const TopContent = props.content;
  const Data = props.Data
  return (
  <div className='AccountDetails'>
    
    <h4>Account Analytics</h4>

    <div className='analytics-1'>
      {LabelList.map((item,index) =>(
        <span key={index}>
          <h1 className='numbers'>{Data[index]}</h1>
          <span>{item}</span>
        </span>
      ))}
    </div>

    <div className="topMedia">
        <h4>Top Posts</h4>
        {
          TopContent.map((item, index) =>(
            <span key={index}>
            <span>{item[index].title}</span>
            <span>{item[index].views}</span>
            </span>
          ))
        }
    </div>

  </div>
  )
}
