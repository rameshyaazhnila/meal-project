import React from 'react'
import image from "./assets/png.png"

const App = () => {
  return (
    <div className="container bg-gradient-to-b from-white to-black pb-20">
      <h1 className="lg:text-blue-600 p-24 sm:p-10 md:p-0 lg:p-5">hello ramesh</h1>
      <img className='shadow' src={image} alt="" />
      <h2 className='text-white'>one pic is successfully created</h2>
    </div>
  )
}

export default App