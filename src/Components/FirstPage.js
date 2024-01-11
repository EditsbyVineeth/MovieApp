import React, { useState } from "react";
import title_logo from "./Images/Logo_title.png";
// import { button } from 'react-router-dom'

export default function FirstPage({ showLayout }) {
const[language, setLanguage]= useState("English")

const handleLanguageChange=(e)=>{
  setLanguage(e.target.value)
}

  return (
    <div className="parent-img-container text-white">
      <div className="child-container top-0 left-0 w-full h-full -z-30  p-20"></div>

      <section className=" absolute z-50 top-0 w-full h-full flex flex-col items-center gap-16 md:gap-24">
        <nav className="navbar  w-11/12 px-10 py-10 z-10 flex flex-row justify-between items-center">
          <div className=" w-full flex felx-row items-center justify-between">
            <span className=" text-5xl font-extrabold cursor-pointer text-red-700"  onClick={showLayout}>
              MovieFlix</span>
            <div className="">
             

              {/* <select value={selectedLanguage} onChange={handleLanguageChange}> */}
              <select  onClick={handleLanguageChange} className=" text-black h-8 w-16 md:w-24 m-1 md:m-4">
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="Spanish">Hindi</option>
                <option value="Spanish">Korean</option>
                <option value="Spanish">Tamil</option>
                <option value="Spanish">Malayalam</option>
                {/* Add more language options */}
              </select>
              <button
                className="singIn_btn h-8 w-16 md:w-24 m-1 md:m-4 bg-red-700"
                href="/"
                onClick={showLayout}
              >
                Sign In
              </button>
            </div>
          </div>
        </nav>

        {/* descriptions */}

        <div className=" mt-20 md:mt-8 flex flex-col justify-center items-center z-20 gap-2 md:gap-6 font-bold text-xl px-2 md:px-20">
          <div className= " text-2xl font-extrabold sm:text-3xl md:text-4xl ">
            Enjoy big movies, hit series and more <br/>from ₹ 149.
          </div>
          <div className=" w-2/3 md:text-2xl">
            Join today.Cancel anytime.
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <div className="p-2 w-full flex flex-col md:flex-row gap-5 items-center justify-center">
            <input
              type="text"
              className=" w-4/5 md:w-3/5 h-10 md:h-16 text-black px-10 "
              placeholder=" SampleAccount@gmail.com"
            />
            <button
              type="submit"
              className=" start_btn h-10 md:h-16 md:text-2xl tracking-wider bg-red-700  w-2/5 md:w-1/5"
              onClick={showLayout}
            >
              {" "}
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
