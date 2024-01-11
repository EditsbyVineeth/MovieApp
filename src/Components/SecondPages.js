import React from "react";
import smartTV from './Images/Screenshot (125).png'
import android from './Images/android.png'
import childzone from './Images/ChildrenZone.png'



export default function SecondPages() {
  return (
    <div className=" flex flex-col bg-black w-full text-white ">

     <div className=" first_section w-full border-4 border-gray-500  pb-12 pt-12 md:pb-28 md:pt-20 flex flex-col md:flex-row items-center justify-evenly gap-4">
        <div className="h-64 w-2/3 md:w-1/3  text-xl md:text-2xl text-left flex flex-col items-center justify-center">
          <span className=" text-3xl md:text-4xl font-extrabold mb-6 md:mb-10">Enjoy on your TV</span>
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more. </div>
        <div className="h-64 w-2/3 md:w-1/3 flex ">
         <img src={smartTV} className="iimggg" alt="smarttv"/>
        </div>
      </div> 

     <div className=" w-full border-4 border-gray-500 pb-16 pt-16 md:pb-28 md:pt-20 flex flex-col md:flex-row items-center justify-evenly gap-10">
        <div className="h-64 w-2/3 md:w-1/3">
         <img src={android} className="iimggg bg-black" alt="smarttv"/>  
        </div>
        <div className="h-64 w-2/3 md:w-1/3  text-xl md:text-2xl text-left flex flex-col items-center justify-center">
          <span className=" text-3xl md:text-4xl font-extrabold mb-6 md:mb-10">Enjoy on your TV</span>
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more. </div>
      </div> 

     <div className=" w-full border-4 border-gray-500 pb-16 pt-16 md:pb-28 md:pt-20 flex flex-col md:flex-row items-center justify-evenly gap-10">
        <div className="h-64 w-2/3 md:w-1/3  text-xl md:text-2xl text-left flex flex-col items-center justify-center">
          <span className=" text-3xl md:text-4xl font-extrabold mb-6 md:mb-10">Enjoy on your TV</span>
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more. </div>
        <div className="h-64 w-2/3 md:w-1/3">
         <img src={childzone} className="iimg bg-black" alt="smarttv"/>  
        </div>
      </div> 
     

    </div>
  );
}
