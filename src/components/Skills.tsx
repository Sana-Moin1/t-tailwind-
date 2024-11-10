import React from 'react'

const Skills= () => {
  return (
    <div className='container pt-32'>
<div id='skills' className='grid md:grid-cols-2 gap-20 items-centre'>
<div>
<h2 className='text-4xl md:text-5x1'data-aos="zoom-in-left">My Specialty</h2>
<p className='text-red-400 pt-4'>
I am a passionate web developer with a love for creating modern, user-friendly websites. I specialize in front-end development using technologies like TypeScript,HTML,CSS,React, Next.js, and Tailwind CSS,Figma.
</p>
</div>
<div className='grid grid-cols-2 text-amber-400 text-3xl sm:text-4xl'>
<div className='spacr-y-2'>

<h2 data-aos="zoom-in-left">TypeScript</h2>
    <h2 data-aos="zoom-in-left">React.js</h2>
    <h2 data-aos="zoom-in-left">Next.js</h2>
    <h2 data-aos="zoom-in-left">Figma</h2>
    </div>
    <div className='spacr-y-2'>

<h2 data-aos="zoom-in-left">CSS</h2>
    <h2 data-aos="zoom-in-left" >HTML</h2>
    <h2 data-aos="zoom-in-left">Tailwind CSS</h2>
    <h2 data-aos="zoom-in-left" >Node.js</h2>
    </div>


</div>
</div>
</div>
   
  )
}

export default Skills