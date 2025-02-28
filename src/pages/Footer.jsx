import React from 'react'
import { FaRegHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-amber-300 py-3">
    <h3 className="flex items-center justify-center gap-2 text-black">
      Made with <FaRegHeart className="text-red-500" /> by Mukul
    </h3>
  </div>
  )
}

export default Footer