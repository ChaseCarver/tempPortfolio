import React, { useEffect, useState } from 'react';
import reference from "./Referencetest.png";
import pfp from "./image.png";

function Card({img, dir}) {
    return(
    <>
      <div className={`h-screen w-screen flex items-center justify-center flex-col lg:h-[50vh] lg:flex-row lg:min-h-64`}>
        <img src={img} alt="Test123" className="order-first p-2 lg:m-10 border-4 shadow-md border-black rounded-md aspect-video w-11/12 lg:w-1/3 max-w-lg lg:max-w-3xl"></img>
        <div className="flex flex-col h-1/2 lg:justify-center p-4 lg:p-10 lg:w-2/3">
          <h1 className="mb-5 text-2xl font-bold">Lorem ipsum</h1>
          <p className="indent-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className="btn w-fit mt-5">Action</button>
        </div>
      </div>
    </>
    )
  }

function Hello(){
  const greeting = ["Hi", "Hello", "Hey", "Howdy", "Greetings", "Hola"]
  const mask = ["blob1", "blob2", "blob3"]
  const storage = window.localStorage.getItem("GREETING")
  const storageMask = window.localStorage.getItem("MASK")
  if(storage == null){window.localStorage.setItem("GREETING", 0)}
  if(storageMask == null){window.localStorage.setItem("MASK", 0)}

  useEffect(() =>{
    if (storage == greeting.length - 1){window.localStorage.setItem("GREETING", 0)}
    else{window.localStorage.setItem("GREETING", (Number(storage) + 1))}
    if (storageMask == mask.length - 1){window.localStorage.setItem("MASK", 0)}
    else{window.localStorage.setItem("MASK", (Number(storageMask) + 1))}
  } ,[])



  return(
    <>
      <div className="flex h-screen w-screen ">
        <div className="flex flex-col h-full w-1/2 justify-center items-center">
          <div className="w-1/2 ">
            <h1 className="text-9xl">{greeting[window.localStorage.getItem("GREETING")]}, </h1>
            <h1 className="text-9xl">I'm <span className="bg-clip-text text-transparent bg-gradient-to-r hover:bg-gradient-to-l from-pink-500 to-violet-500">Chase</span>.</h1>
            <button className="btn">Contact</button>
          </div>
        </div>
        <div className="h-full w-1/2 flex justify-center items-center">
          <img id={mask[window.localStorage.getItem("MASK")]} src={pfp} alt="pfp" className="aspect-square h-1/2"></img>
          </div>
      </div>
    </>
  )
}

function Home(){
    return(
      <>
          <Hello></Hello>
          <Card img={pfp} dir="row"></Card>
          <Card img={reference} dir="row"></Card>
          <Card img={reference} dir="row"></Card>
      </>
    )
}



export default Home;