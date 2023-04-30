import Image from 'next/image'
import React from 'react'

const Button = ({ children, size, color, icon }) => {
  const getSizeClass = (size) => {
    switch (size) {
      case 'small':
        return 'px-2 py-1 text-sm'
      case 'medium':
        return 'px-4 py-2 text-base'
      case 'large':
        return 'px-6 py-3 text-lg'
      default:
        return 'px-4 py-2 text-base'
    }
  }

  const getColorClass = (color) => {
    switch (color) {
      case 'primary':
        return 'bg-primary hover:bg-primary text-white'
      case 'secondary':
        return 'bg-gray-500 hover:bg-gray-600 text-white'
      default:
        return 'bg-blue-500 hover:bg-blue-600 text-white'
    }
  }

  return (
    <button
      className={`focus:ring-primary inline-flex items-center justify-center rounded-md border border-transparent font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${getSizeClass(
        size
      )} ${getColorClass(color)}`}
    >
      {icon && <Image src={icon} alt="icon" className="mr-2 h-5 w-5" />}
      {children}
    </button>
  )
}

export default Button
