import React,{useState,useEffect} from 'react'
import {Link} from  "react-router-dom"
import axios  from "axios"


function Chracter() {
  const [loading, setLoading] = useState(false); 
  const [characterdata, setCharacterData] = useState([]);
  
  useEffect(()=>{
    const fetch = async()=>{

        try{
             // show loading till is not fetch
         setLoading(true);
         //  fetch api url
         const res = await axios.get("https://potterhead-api.vercel.app/api/characters");

         // after fetch store in setStore
         setCharacterData(res.data);
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

  console.log(characterdata)
   return (
        <>
       <div className='mx-auto w-full pl-10 '>
       <Link to="/chracter">
           <h1 className='text-4xl font-semibold mt-4'>Books Of Harry Potter</h1>
           </Link>
           <div className=" grid grid-cols-3 gap-[50px] mt-10 w-[1000px] mx-auto  "> 
           {
                       characterdata.map((item,index) => (
                         <div className=' '>
                          <div key={index} className=' bg-white w-[200px] hover:scale-105 transition-all duration-300 h-[330px] mt-8 place-content-center border-2 border-slate-500 p-2 rounded-md '>
                          <img src={item.image} alt="harry potter image" className='rounded-md mx-auto h-auto'/>
                          <h1 className='text-lg font-semibold'>{item.name}</h1>
                          
                  
                         </div>
                         </div>
                           
                   )) 
                   } 
               </div> 
             
       </div>
        </>
      
  
)
}

export default Chracter