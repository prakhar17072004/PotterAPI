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
          {/* Main div */}
         <div className='mx-auto w-full pl-10  pt-10 mt-5 mb-16'>
         <Link to="/spell">
             {/* Heading */}
             <h1 className='text-4xl font-semibold mt-4 text-black'>All Spell Of Harry Potter</h1>
             </Link>
             {/* card main div */}
             <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10  mx-auto  "> 
             {
                        moviesdata.map((item,index) => (
                          // card div
                           <div className='overflow-hidden card hover:border-none hover:shadow-lg hover:shadow-white hover:scale-110 transition-all duration-500  mt-8 place-content-center border-2 border-slate-500 p-2 rounded-lg '>
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