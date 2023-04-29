import React from 'react'
import Image from 'next/image'
import Nav from './Nav'

const Header = () => {
  return (
    <header
      className={`mx-auto my-1 flex w-full flex-col items-center justify-between px-3 md:flex-col`}
    >
      <div>
        <div className={`flex flex-col items-center`}>
          <Image
            src="/static/images/beaker.png"
            alt="beaker"
            width={80}
            height={80}
            objectFit={`cover`}
          />
        </div>
        <span className={`text-primary mx-2 text-xl font-thin md:text-4xl`}>edndacomputer </span>
      </div>
      <div>
        <Nav />
      </div>
    </header>
  )
}

export default Header
