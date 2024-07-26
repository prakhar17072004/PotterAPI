import React,{useState,useEffect} from 'react'
import {Link} from  "react-router-dom"
import axios  from "axios"

function Movies() {
  const [loading, setLoading] = useState(false); 
  const [moviesdata, setMoviesData] = useState([]);
  
  useEffect(()=>{
    const fetch = async()=>{

        try{
             // show loading till is not fetch
         setLoading(true);
         //  fetch api url
         const res = await axios.get("https://potterhead-api.vercel.app/api/movies");

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
       <div className='mx-auto w-full pl-10 pt-10 '>
       <Link to="/chracter">
           <h1 className='text-4xl font-semibold mt-4 text-slate-400'>All Movies Of Harry Potter</h1>
           </Link>
           <div className=" grid grid-cols-3 gap-[50px] mt-10 w-[1000px] mx-auto  "> 
           {
                      moviesdata.map((item,index) => (
                         <div className=' '>
                          <div key={index} className=' bg-white w-[200px] hover:scale-110 transition-all duration-500 h-[370px] mt-8 place-content-center border-2 border-slate-500 p-2 rounded-md '>
                          <img src={item.poster} alt="harry potter image" className='rounded-md mx-auto h-auto'/>
                          <h1 className='text-lg font-semibold'>{item.title}</h1>
                          <h3 className='text-lg font-medium'>{item.release_date}</h3>
                          
                  
                         </div>
                         </div>
                           
                   )) 
                   } 
               </div> 
             
       </div>
        </>
      
  
)
}

export default Movies