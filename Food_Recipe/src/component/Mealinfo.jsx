import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {ClimbingBoxLoader} from 'react-spinners'


const Mealinfo = () => {
    const [Loading, setLoading] = useState(true);
    const {mealid} = useParams();
    console.log(mealid);
    const [info, setInfo] = useState();

    
    
    const getInfo = async () =>{
        try {
            const get =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
            const jsonData = await get.json();
            console.log(jsonData.meals[0]);
            setInfo(jsonData.meals[0])
            set.setLoading(false)
        } catch (error) {
            // set.setLoading(false)
            return(
                "Data Not Found"
            )
        }
      
    }

   
    
  useEffect(()=>{
  
      
        
        setTimeout(getInfo,3000);
        
       
  
  },[mealid])
   
           
        
   
    return (
        <>
        
           
        { !info ?
           
           <ClimbingBoxLoader color=' black' style={{display:'flex', justifyContent:'center', alignItems:'center'}}/>
           
           
            
        
        
        
       : 
       
            
        <div className='mealInfo'>
            
     <img src={info.strMealThumb}/>
     <div className='info'>
        <h1>Recipe Detail</h1>
        <button>{info.strMeal}</button>
        <h3>Intruction's</h3>
        <p>{info.strInstructions}</p>
     </div>
    </div>
}
</>
     
  )
}

export default Mealinfo
