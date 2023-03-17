import React from 'react'
import StatCard from '../../../components/statCardArea/StatCard'

export default function StatCardsArea() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around'}}>
        <StatCard backgroundColor={'#2319A1'} chartImage={''} />
        <StatCard backgroundColor={'#268AE2'} chartImage={''} />
        <StatCard backgroundColor={'#F9A717'} chartImage={''} />
        <StatCard backgroundColor={'#DD3F40'} chartImage={''} />
    </div>
  )
}
