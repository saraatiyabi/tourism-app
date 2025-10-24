import React from 'react'
import Hero from '@/components/templates/Home/Hero/Hero'
import About from '@/components/templates/Home/About/About'
import Tours from '@/components/templates/Home/Tours/Tours'
import Comments from '@/components/templates/Home/Comments/Comments'
import AllTours from '@/components/templates/Home/AllTours/AllTours'


const Home = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Hero />
      <About />
      <Tours />
      <Comments />
      <AllTours />
    </div>
  )
}

export default Home