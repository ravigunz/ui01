import React from 'react'
import BreadcombBar from './dashboard/BreadcombBar'
import ChartRow from './dashboard/ChartRow'
import SocialCards from './dashboard/SocialCards'
import StatCardsArea from './dashboard/StatCardsArea'
import TopNavigation from './dashboard/TopNavigation'

export default function Dashboard() {
  return (
    <div style={{ width: '100%'}}>
      <TopNavigation />
      <BreadcombBar />
      <StatCardsArea />
      <ChartRow />
      <SocialCards />
    </div>
  )
}
