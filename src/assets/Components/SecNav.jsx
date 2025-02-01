import { useState } from "react"
import { Search, Menu, X } from "lucide-react"

const SecNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-xl font-bold">Logo</div>

          {/* Search Bar - hidden on mobile, shown on larger screens */}
          <div className="hidden md:block flex-grow mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 pr-10 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Navigation Items - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Services
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </div>

          {/* Hamburger Menu Button - shown only on mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                About
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Services
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </div>
            {/* Search Bar in Mobile Menu */}
            <div className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-2 px-4 pr-10 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default SecNav

