import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3 '>
        <Link to='/'>    
        <h2 className='font-bold text-2xl text-neutral-700 tracking-tighter bg-gradient-to-r from-gray-900 to bg-gray-400 bg-clip-text text-transparent'>Clean Slate</h2>
        </Link>
        <p className='flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @usmanghori.com | All right reserved.</p>
        <div className='flex gap-4'>
            <img width={40} src={assets.facebook_icon} alt="" />
            <img width={40} src={assets.twitter_icon} alt="" />
            <img width={40} src={assets.google_plus_icon} alt="" />
        </div>
    </div>
  )
}

export default Footer