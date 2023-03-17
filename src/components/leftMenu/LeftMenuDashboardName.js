import React from 'react'
import logo from '../../images/logo.png'

export default function LeftMenuDashboardName() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#44526C', color: 'grey', padding: '10px'}}>
        <img src={logo} width={'15px'} />
        <p>Dashboard</p>
        <label style={{ backgroundColor: '#3794D9', color: 'white', borderRadius: '2px', padding: '1px 1px 1px 1px', fontSize: '10px'}}>New</label>
    </div>
  )
}
