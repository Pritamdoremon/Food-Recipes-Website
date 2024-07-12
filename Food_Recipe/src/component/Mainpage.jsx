import React, { useEffect, useState } from 'react'
import Mealcards from './Mealcards';
import {ClimbingBoxLoader} from 'react-spinners'

const Mainpage = () => {
    const [data,setData]  =useState();
    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState("")
   

    const handleInput = (event) =>{
        setSearch(event.target.value)
    }

    
    const myFun = async () =>{
        if(search == ""){
            setMsg("Please Enter Something")
        }else{
            try {
                const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await get.json();
       
        setData(jsonData.meals)
        setMsg("")  
        setLoading(false)
            } catch (error) {
                console.log("Data Not Found");
            }
          
        
        }
         
    }

   
    
  return (
    <> 
         
        
     

        <h1 className='head'>FOOD RECIPE APP</h1>
        <div className='container'>
            <div className='searchBar'>
                <input type='text' placeholder='Enter Dishe' onChange={handleInput}/>
                <button onClick={myFun}>Search</button>
            </div>
            <h4 className='msg' style={{ textAlign:'center'}}>{msg}</h4>
            <div>
            <Mealcards detail={data}/>
            </div>
        </div>
    </>
  )
}

export default Mainpage
