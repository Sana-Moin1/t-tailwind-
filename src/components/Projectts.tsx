import { title } from 'process'
import React from 'react'
import Heading from './Heading';
import Card from './Card';
import { DiVim } from 'react-icons/di';



const data = [
    {
id:0,
title:"Todo List",
desc:"A React & Type Script  Based App",
img:"/image 3.jpg",
tags:["React","Node","CSS","Typescript"],
},

{
id:1,
title:"Weather Widget",
desc:"A Next.js & Type Script  Based App",
img:"/images2.jpg",
tags:["React","Node","CSS"],
},
{
  id:2,
  title:"Simple Calculator", 
  desc:"A React CSS,HTML & Type Script  Based Project",
  img:"/image 1.png",
   tags:["HTML","Node","CSS","Typescript"],    
 },

{
id:3,
title:"Static Interactive Resume",
desc:"HTML,CSS & Type Script  Based  Project",
img:"/images 4 .jpg",
tags:["Node","CSS","Typescript"],
},
];
 const Projectts = ()=> {
  return (
<div id = 'projectts' className='container pt-32'>
  <Heading title='My Projects'/>
  <div className='display flex gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
     {data.map((el) => (<Card 
     key={el.id}
title= {el.title}
desc={el.desc}
img= {el.img}
tags={el.tags}
/>))}  
</div>
 </div> 
  )
 }
export default Projectts