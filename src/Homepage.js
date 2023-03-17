import React from 'react'
import Dashboard from './layouts/homepage/Dashboard'
import LeftMenu from './layouts/homepage/LeftMenu'

export default function Homepage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <LeftMenu />
        <Dashboard />
    </div>
  )
}
