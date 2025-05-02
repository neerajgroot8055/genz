import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20 '>
        <img src={assets.logo} width={150} alt="" />
    <p>Copyright @Groot | All rights reserved .</p>
    
    
    </div>
  )
}

export default Footer