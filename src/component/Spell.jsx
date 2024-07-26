import React,{useState,useEffect} from 'react'
import {Link} from  "react-router-dom"
import axios  from "axios"


function Spell() {
    const [loading, setLoading] = useState(false); 
    const [moviesdata, setMoviesData] = useState([]);
    
    useEffect(()=>{
      const fetch = async()=>{
  
          try{
               // show loading till is not fetch
           setLoading(true);
           //  fetch api url
           const res = await axios.get("https://potterhead-api.vercel.app/api/spells");
  
           // after fetch store in setStore
           setMoviesData(res.data);
           console.log("hello")
  
           //close the loading
           setLoading(false);
  
          }
          catch(error){
               console.log("error while fetching the data",error);
  
          }
          
      };
      //call the function
      fetch([]);
    },[]);
  
    console.log(moviesdata)
     return (
          <>
         <div className='mx-auto w-full pl-10  pt-10'>
         <Link to="/chracter">
             <h1 className='text-4xl font-semibold mt-4 text-slate-400'>All Movies Of Harry Potter</h1>
             </Link>
             <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10  mx-auto  "> 
             {
                        moviesdata.map((item,index) => (
                           <div className='overflow-hidden card bg-white  hover:scale-110 transition-all duration-500  mt-8 place-content-center border-2 border-slate-500 p-2 rounded-md '>
                            <div key={index} className=''>
                            
                            <h1 className='text-lg font-bold'>{item.name}</h1>
                            <h6 className='text-lg font-medium'>{item.description}</h6>
                            
                    
                           </div>
                           </div>
                             
                     )) 
                     } 
                 </div> 
               
         </div>
          </>
        
    
  )
}

export default Spell