import React from 'react'
import TopNavigationLeft from './topNavigation/TopNavigationLeft'
import TopNavigationRight from './topNavigation/TopNavigationRight'

export default function TopNavigation() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TopNavigationLeft />
        <TopNavigationRight />
    </div>
  )
}
