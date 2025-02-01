import React,{useState} from 'react'

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggelMenu = () =>{
    setOpenMenu(!openMenu)
  }

  console.log(openMenu)
  return (
    <>
      {/* <nav className='bg-indigo-400 h-16 w-full flex items-center justify-between'>
        <div className='mx-7'>
          Logo
        </div>

        <div >
          <ul className='md:flex items-center mx-7 hidden space-x-4'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>More</li>
          </ul>
        </div>

        <div className='md:hidden mx-7'>
          <button onClick={toggelMenu} >Click Me</button>
        </div>

      </nav>
        {openMenu ? (
          <ul className='flex-col md:hidden'>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>More</li>
        </ul>
        ):null} */}

        <nav className='bg-indigo-400 p-4'>
          <div className='flex justify-between items-center'>
            <div>
              Logo
            </div>

              <ul className='hidden md:flex space-x-3.5 '>
                <li>Home</li>
                <li>Abut</li>
                <li>Contact</li>
                <li>More</li>
              </ul>

              <div className='md:hidden '>
                <button onClick={toggelMenu}>Click Me</button>
              </div>
            
          </div>
          {openMenu ? (
             <div className="fixed top-28 right-0 w-2/5 h-[calc(100vh-4rem)] bg-indigo-400 shadow-lg p-4 overflow-y-auto transition-transform transform ease-in-out duration-300">
               <ul className='md:hidden flex-col space-x-3.5 '>
              <li>Home</li>
              <li>Abut</li>
              <li>Contact</li>
              <li>More</li>
            </ul>
             </div>
          ):null}


{/* <div
        className={`fixed top-12 right-0 w-2/5 h-full bg-indigo-400 shadow-lg p-4 overflow-y-auto transition-transform duration-300 ease-in-out transform ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-4">
          <li className="text-indigo-600 hover:text-indigo-900">Home</li>
          <li className="text-indigo-600 hover:text-indigo-800">About</li>
          <li className="text-indigo-600 hover:text-indigo-800">Contact</li>
          <li className="text-indigo-600 hover:text-indigo-800">More</li>
        </ul>
      </div> */}
        </nav>
    </>
  )
}

export default Navbar
