import React from 'react'
import BreadcombBarLeft from './breadcombBar/BreadcombBarLeft'
import BreadCombBarRight from './breadcombBar/BreadCombBarRight'

export default function BreadcombBar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <BreadcombBarLeft />
        <BreadCombBarRight />
        </div>
  )
}
