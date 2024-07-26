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

    
    <div className="bg item-center justify-center overflow-y-hidden w-[100vw]">
    <Navbar className="" path="/"/>
      <Routes>
        <Route path="/" element={<Book/>}/>
        <Route path="/chracter" element={<Chracter/>}/>
        <Route path="/houses" element={<Houses/>}/>
        <Route path="/spell" element={<Spell/>}/>
      </Routes>
    </div>
         

      
      
    
  )
}

export default App
