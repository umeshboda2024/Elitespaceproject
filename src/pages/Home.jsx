import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Home/Hero'
import StateProperties from '../Home/StateProperties'
import Buyproperties from '../Home/Buyproperties'
import Propertycard from '../Component/Propertycard'
import Stateporpertycard from '../Component/Stateporpertycard'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Stateporpertycard/>        
      <Propertycard/>
      {/* <Buyproperties></Buyproperties>  */}
    </div>
  )
}

export default Home;
