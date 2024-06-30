import React from 'react'
import { Outlet } from 'react-router-dom'

const RouteLayout = () => {
  return (
    <div>
      Rootlayout
      <Outlet/>
    </div>
  )
}

export default RouteLayout