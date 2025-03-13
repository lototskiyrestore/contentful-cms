import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
   <section className="hero">
         <div className='hero-center'>
            <div className="hero-title">
               <h1>Contentful CMS</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloremque repellendus earum, et molestias quo accusamus ipsa cum doloribus ea cupiditate unde quod? Ratione recusandae quia perferendis esse consectetur commodi?</p>
            </div>
            <div className="img-container">
               <img 
                  src={heroImg} 
                  alt="woman and the browser" 
                  className='img'
               />
            </div>
      </div>
   </section>
  )
}

export default Hero
