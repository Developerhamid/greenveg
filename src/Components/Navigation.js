import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Navigation = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default Navigation