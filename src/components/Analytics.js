import React from 'react'
import './Analytics.css'
import AnalyticsGraph from './analyticsComponents/AnalyticsGraph'
import AnalyticsAccountDetails from './analyticsComponents/AnalyticsAccountDetails'

export default function Analytics() {
  return (
    <div class="analyticscontainer">
      <div class="AnalyticsPlatformName">Youtube</div>
      <div class="AnalyticsGraph">
        <AnalyticsGraph />
      </div>
      <div class="AnalyticsAccountDetails">
        <AnalyticsAccountDetails />
      </div>

      <div className="AnalyticsPrevPlatform">❮</div>

      <div className="AnalyticsNextPlatform">❯</div>
    </div>
  )
}