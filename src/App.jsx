import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Book from './component/Book'
import Chracter from './component/Chracter'
import Houses from './component/Houses'
import Spell from './component/Spell'
import Navbar from './component/Navbar'

function App() {

  return (

    <>
    <Navbar className="w-[100wh]" path="/"/>
      <Routes>
        <Route path="/" element={<Book/>}/>
        <Route path="/chracter" element={<Chracter/>}/>
        <Route path="/houses" element={<Houses/>}/>
        <Route path="/spell" element={<Spell/>}/>
      </Routes>
         

      
      
    </>
  )
}

export default App
