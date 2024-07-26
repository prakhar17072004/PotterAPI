import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (

    <div className='space-x-11 text-4xl font-semibold bg-slate-900 text-white w-[100vw] '>
        <Link to="/">
        <button>Books</button>
        </Link>
        <Link to="/chracter">
        <button>Chracter</button>
        </Link>
        <Link to="/houses">
        <button>Houses</button>
        </Link>
        <Link to="/spell">
        <button>Spell</button>
        </Link>
    </div>
  )
}

export default Navbar