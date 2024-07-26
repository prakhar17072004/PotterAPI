import React,{ useState,useEffect } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Book from './component/Book'
import Chracter from './component/Chracter'
import Movies from './component/Movies'
import Spell from './component/Spell'
import Navbar from './component/Navbar'


function App() {

  return (

    
    <div className=" mx-auto item-center justify-center overflow-hidden w-[1250px] ">
    <Navbar className="mx-auto " path="/"/>
      <Routes>
        <Route path="/" element={<Book/>}/>
        <Route path="/chracter" element={<Chracter/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/spell" element={<Spell/>}/>
      </Routes>
    </div>
         

      
      
    
  )
}

export default App
