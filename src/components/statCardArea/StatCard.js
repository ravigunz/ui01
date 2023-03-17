import React from 'react'
import logo from '../../images/settings.jpg'
import logo2 from '../../images/logo.png'

export default function StatCard({backgroundColor, chartImage }) {
  return (
    // <div style={{ display: 'flex', backgroundColor, padding: '10px'}}>
    <div style={{ backgroundColor, padding: '10px'}}>
        <div style={{color: 'white', display: 'flex', textAlign: 'left', }}>
            <div style={{ textAlign: 'left' }}>
        <p>9,823</p> 
        <p>Members online</p>
            </div>
        <div>

    <img src={ logo } width={'15px'} height={'15px'}/>
        </div>
    </div>
    <img src={ logo2 } width={'150px'} height={'150px'}/>
        </div>
  )
}
