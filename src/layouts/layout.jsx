import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import { AnimatePresence } from 'framer-motion'
import TenContainer from '../components/ten'
export default function Layout() {
  return (
    <div className='c-s-c '>
      <Header />
      <div className="wmia c-s-c  scrl_none" style={{ maxWidth: "1500px" }}>
        <Outlet />
      </div>
      <Footer />
      <AnimatePresence>
        <TenContainer />
      </AnimatePresence>
    </div>
  )
}
