import React from 'react'
import { Outlet } from 'react-router-dom'

const RouteLayout = () => {
  return (
    <div>
      Rootla
      <Outlet/>
    </div>
  )
}

export default RouteLayout