import { useState } from "react"

import plantLogo from "../assets/logo.png"

import {
  FaSearch,
  FaShoppingBag
} from "react-icons/fa"

import {
  HiMenuAlt3,
  HiX
} from "react-icons/hi"

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO + TITLE */}

        <div className="flex items-center gap-3">

          {/* Logo Image */}

          <img
            src={plantLogo}
            alt="FloraVision Logo"
            className="h-14 md:h-16 object-contain"
          />

          {/* Title */}

          <h1 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight">

            FloraVision<span className="text-white">.</span>

          </h1>

        </div>

        {/* DESKTOP MENU */}

        <ul className="hidden md:flex gap-10 text-gray-300 items-center">

          <li className="hover:text-white cursor-pointer duration-300">
            Home
          </li>

          {/* Plants Dropdown */}

          <li className="relative group cursor-pointer">

            <span className="hover:text-white duration-300">
              Plants Type
            </span>

            <div className="absolute top-8 left-0 bg-black/90 backdrop-blur-xl rounded-2xl p-4 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 shadow-2xl border border-white/10">

              <ul className="space-y-3 text-gray-300">

                <li className="hover:text-white cursor-pointer">
                  Indoor Plants
                </li>

                <li className="hover:text-white cursor-pointer">
                  Outdoor Plants
                </li>

                <li className="hover:text-white cursor-pointer">
                  Succulents
                </li>

                <li className="hover:text-white cursor-pointer">
                  Air Purifying
                </li>

                <li className="hover:text-white cursor-pointer">
                  Flower Plants
                </li>

              </ul>

            </div>

          </li>

          <li className="hover:text-white cursor-pointer duration-300">
            More
          </li>

          <li className="hover:text-white cursor-pointer duration-300">
            Contact
          </li>

        </ul>

        {/* RIGHT SIDE ICONS */}

        <div className="hidden md:flex gap-5 text-xl items-center text-white">

          {/* Search */}

          <FaSearch className="cursor-pointer hover:text-gray-300 duration-300" />

          {/* Cart Bag */}

          <FaShoppingBag className="cursor-pointer hover:text-gray-300 duration-300" />

          {/* Small Menu */}

          <HiMenuAlt3 className="cursor-pointer hover:text-gray-300 duration-300 text-2xl" />

        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-white"
        >

          {
            open ? <HiX /> : <HiMenuAlt3 />
          }

        </button>

      </div>

      {/* MOBILE MENU */}

      {
        open &&

        <div className="md:hidden bg-black/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-5 text-lg text-white border-t border-white/10">

          <a href="#">Home</a>

          <a href="#">Plants</a>

          <a href="#">More</a>

          <a href="#">Contact</a>

        </div>
      }

    </nav>
  )
}

export default Navbar