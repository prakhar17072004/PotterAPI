import React,{useState,useEffect} from 'react'
import {Link} from  "react-router-dom"
import axios  from "axios"

function Book() {
     const [loading, setLoading] = useState(false); 
    const [storedata, setStoreData] = useState([]);
    
    useEffect(()=>{
      const fetch = async()=>{

          try{
               // show loading till is not fetch
           setLoading(true);
           //  fetch api url
           const res = await axios.get("https://potterhead-api.vercel.app/api/books");
 
           // after fetch store in setStore
           setStoreData(res.data);
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

    console.log(storedata)
     return (
          <>
         <div className='mx-auto w-full pt-10 '>
         <Link to="/">
             <h1 className='text-4xl font-semibold mt-4'>Books Of Harry Potter</h1>
             </Link>
             <div className=" grid grid-cols-3 gap-[50px] mt-10 w-[1200px] mx-auto  "> 
             {
                         storedata.map((item,index) => (
                           <div className=' '>
                            <div key={index} className=' bg-white w-[300px] hover:scale-110 transition-all duration-500 border-2 border-slate-500 p-2 rounded-md '>
                            <img src={item.cover} alt="harry potter image" className='rounded-md mx-auto h-auto'/>
                            <h1 className='text-lg font-semibold'>{item.title}</h1>
                            
                    
                           </div>
                           </div>
                             
                     )) 
                     } 
                 </div> 
               
         </div>
          </>
        
    
  )
}

export default Book