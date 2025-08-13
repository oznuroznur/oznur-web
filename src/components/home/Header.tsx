import React from 'react'

function Header() {
  return (
      <nav className="flex flex-col sm:flex-row gap-3 md:gap-6 ">
            <a
              href="#about"
              className="border-2 border-white px-3 py-2 md:px-4 md:py-2  hover:bg-white hover:text-black hover:bg-none transition-none text-center text-sm md:text-base bg-[url('/assets/banner-bg.png')] bg-cover bg-center"
            >
              [ABOUT]
            </a>
            <a
              href="#projects"
              className="border-2 border-white px-3 py-2 md:px-4 md:py-2 hover:bg-white hover:text-black hover:bg-none transition-none text-center text-sm md:text-base bg-[url('/assets/banner-bg.png')] bg-cover bg-center"
            >
              [PROJECTS]
            </a>
            <a
              href="#resume"
              className="border-2 border-white px-3 py-2 md:px-4 md:py-2 hover:bg-white hover:text-black hover:bg-none transition-none text-center text-sm md:text-base bg-[url('/assets/banner-bg.png')] bg-cover bg-center"
            >
              [RESUME]
            </a>
            <a
              href="#contact"
              className="border-2 border-white px-3 py-2 md:px-4 md:py-2 hover:bg-white hover:text-black hover:bg-none transition-none text-center text-sm md:text-base bg-[url('/assets/banner-bg.png')] bg-cover bg-center"
            >
              [CONTACT]
            </a>
          </nav>
  )
}

export default Header
