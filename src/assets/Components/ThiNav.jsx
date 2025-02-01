import Reac,{useState} from 'react'
import "./ThiNav.css"

function ThiNav() {
    const [menu, setMenu] = useState(false)
    const toggle = ()=>{
        setMenu(!menu)
    }
    console.log(menu)
  return (
    <>
    <nav className='bg-amber-300 p-3 fixed w-full top-0 left-0 z-50 shadow-lg' >
        <div className='flex justify-between items-center'>
            <div>Lodo</div>

            <div className='hidden md:flex ml-50'>
                <input type="text " className='border-2 w-auto' />
                <button>Search</button>
            </div>

            <ul className='hidden md:flex gap-x-3'>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>

            <div className='md:hidden'>
                <button onClick={toggle}>X</button>
            </div>
            
        </div>
        {menu ? (
            <>
            <div className="flex justify-center">
            <ul className='md:hidden flex-col gap-x-3'>
             <li>Home</li>
             <li>Home</li>
             <li>Home</li>
             <li>Home</li>
            </ul>
            </div>
            <div className='p-3 flex justify-center md:hidden'>
                <input type="text " className='border-2 w-auto' />
                <button>Search</button>
            </div>
            </>
        ):null}
    </nav>
      
    </>
  )
}

export default ThiNav
