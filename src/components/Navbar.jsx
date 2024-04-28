import React, { useState } from 'react'
import pic from "../../public/myimg2.jpg"
import { AiOutlineMenu } from 'react-icons/ai'
import { IoCloseSharp } from 'react-icons/io5'
import { Link } from 'react-scroll'
function Navbar() {
  const [menu, setMenu] = useState(false)
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 1,
      text: "About",
    },
    {
      id: 1,
      text: "Portfolio",
    },
    {
      id: 1,
      text: "Experience",
    },
    {
      id: 1,
      text: "Contact",
    }
  ]
  return (
    <div>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
        <div className='flex justify-between  items-center h-18'>
          <div className='flex space-x-2'>
            <img src={pic} className='h-12 w-12 mt-2 rounded-full' />
            <h1 className='font-semibold  text-xl cursor-pointer'>Rachn<span className='text-red-500 2xl'>a</span>
              <p className='text-sm '>Full Stack Developer</p>
            </h1>
          </div>
          {/*desktop navbar */}
          <div>
            <ul className='hidden md:flex space-x-8'>
              {
                navItems.map(({ id, text }) => (
                  <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                  <Link to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass='active'
                  >
                  {text}
                  </Link>
                  
                  </li>
                ))
              }
            </ul>

            <div onClick={() => setMenu(!menu)} className='md:hidden'>
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/*mobile navbar*/}
        {
          menu &&
          (
            <div className='bg-white'>
              <ul className=' md:hidden flex flex-col h-screen  items-center justify-center space-y-4'>
                {
                  navItems.map(({ id, text }) => (
                    <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                    
                    <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass='active'
                  >
                  {text}
                  </Link>
                  
                    </li>
                  ))
                }

              </ul>

            </div>
          )
        }
      </div>

    </div>
  )
}

export default Navbar
