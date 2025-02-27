import React from 'react'
import Header from '../../component/Header'

import Intro from './intro'
import About from './About'
import Experiences from './Experiences'
import Projects from './projects'
import Contact from './Contact'
import Footer from './Footer'
import LeftSider from './LeftSider'


function Home() {
  return (
    <div >
   
        <Header/>
        <div className='bg-primary px-40 sm:px-5'>
          <Intro/>
          <About/>
          <Experiences/>
          <Projects/>
          <Contact/>
          <Footer/>
          <LeftSider/>
        </div>
    </div>
  )
}

export default Home