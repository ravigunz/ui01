import React from 'react'

export default function LeftMenuSubSectionHeading({image, text}) {
  return (
    // <div style={{ backgroundColor: '#3B4B64', color: 'white', }}>
    <div style={{ backgroundColor: '#3B4B64', color: 'white', padding: '10px 0px 10px 5px', textAlign: 'left'}}>

        <p>{image}</p>
        <p>{text}</p>
    </div>
  )
}
