import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Home/Hero'
import StateProperties from '../Home/StateProperties'
import Buyproperties from '../Home/Buyproperties'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <StateProperties/>
      <Buyproperties></Buyproperties>
    </div>
  )
}

export default Home;
