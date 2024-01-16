import React, { useEffect, useState } from 'react'
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


export default function Navbar({handleHideLayout}) {
 const[show, handleShow] = useState(false) 



 useEffect(() => {
  const scrollHandler = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  window.addEventListener('scroll', scrollHandler);

  return () => {
    window.removeEventListener('scroll', scrollHandler);
  };
}, []);


  return (
    <div>
      { show && (
        <nav className= {`title_bar title_bar2 h-20 w-full p-6 flex flex-row justify-between text-lg font-semibold `}>

          <div className=' w-8/12 md:w-1/2 flex flex-row justify-around items-center'>
             <span className=' text-4xl md:text  cursor-pointer' onClick={handleHideLayout}>MovieFlix</span>
             <ul className=' flex flex-row gap-10  text-2xl'>
               <li className=' cursor-pointer'><Link to='/'> Home   </Link></li>
               <li className=' cursor-pointer'><Link to='/mylist'>  My List        </Link> </li>    
             </ul>
             <div>

              

             </div>
          </div>
          <div className=''>
              <RiAccountCircleFill size={32}/> 
            {/* personal account icon */}
          </div>
        </nav>
      )}
      
    </div>
  )
}
