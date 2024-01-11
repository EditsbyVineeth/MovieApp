import React from 'react'
import loading from './Images/LoadingGif.gif'

const Loading=()=>{
    return( 
        <div className=' h-20 w-20 '>
            
            <img src={loading}  className=' w-20 h-20 p-2' alt='loadinggif'>
            </img>
            <p>Wait. . .</p>
        </div>
        
    )
}

export default Loading