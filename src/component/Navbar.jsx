import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (

    <div className='space-x-11 text-4xl font-semibold bg-slate-900 text-white  fixed w-full top-0 left-0 z-10 p-4 '>
        <Link to="/" className=' hover:text-yellow-300 '>
        <button>Books</button>
        </Link>
        <Link to="/character" className=' hover:text-yellow-300'>
        <button>Character</button>
        </Link>
        <Link to="/movies" className=' hover:text-yellow-300' >
        <button>Movies</button>
        </Link>
        <Link to="/spell" className=' hover:text-yellow-300'>
        <button>Spell</button>
        </Link>
    </div>
  )
}

export default Navbar