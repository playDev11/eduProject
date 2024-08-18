import React from 'react'
import Navbar from './component/navbar/navbar'
import Hero from './component/hero/hero'
import Programs from './component/programs/programs'
import Title from './component/Title/Title'
import About from './component/About/about'
import Campus from './component/campus/campus'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <Title subTitle ='Our Program' title ='What We Offer'/>
          <Programs/>
          <Title subTitle ='About US' title ='Little Things We can Say'/>
            <About/>
            <Title subTitle ='Gallery' title ='Campus Photos'/>
            <Campus/>
        </div>
    </div>
  )
}

export default App