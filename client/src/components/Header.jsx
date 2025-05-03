import React from 'react'
import { assets } from '../assets/assets'
import {delay, motion} from "framer-motion" 

const Header = () => {
  return (
    <motion.div initial = {{opacity:0.2 , y : 100}} 
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className=' flex flex-col justify-center items-center text-center my-20'>
        <motion.div  
        initial = {{opacity:0 , y : -20}} 
       
       animate={{opacity:1,y:0}}
       transition={{delay:0.2,duration:0.8}}

        className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
            <p>Turn Your Thoughts Into Images</p>
            <img src={assets.star_icon}></img>
        </motion.div>
        <motion.h1 
          initial = {{opacity:0 }} 
       
          animate={{opacity:1}}
          transition={{delay:0.4,duration:2}}
        
        className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>
            Turn Text to <span className='text-blue-600'>Image</span> in Seconds </motion.h1>
            <motion.p
              initial = {{opacity:0 , y : 20}} 
       
              animate={{opacity:1,y:0}}
              transition={{delay:0.6,duration:0.8}}
            className='text-center max-w-xl mx-auto mt-5'>Unleash your creativity with AI. Turn your imagination into visual art 
                in seconds - just type, and 
                watch the magic unfold</motion.p>
            <motion.button 
            whileHover={{scale:1.20}}
            whileTap={{scale:0.60}}
              initial = {{opacity:0 }} 
       
              animate={{opacity:1}}
              transition={{default: {duration:0.5} , opacity :{delay:0.8 , duration:1}}}
            
            className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full' > Generate Images 
                <img className = 'h-6' src={assets.star_group}></img> </motion.button>    
                <motion.div
                  initial = {{opacity:0 }} 
       
                  animate={{opacity:1}}
                  transition={{delay:1,duration:1}}
                className='flex flex-wrap justify-center mt-16 gap-3'>
                    {Array(6).fill('').map ((item,index)=>(
                        <motion.img
                        whileHover={{scale:1.10,duration:1.2}}
                        className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={index%2 === 0 ? assets.sample_img_1 : assets.sample_img_2 } key={index} width={70}></motion.img>
                    ))}
                </motion.div>
                <motion.p  initial = {{opacity:0 }} 
       
       animate={{opacity:1}}
       transition={{delay:1.2,duration:0.8}} 
       className='mt-2 text-neutral-800'>Generated images from imagination</motion.p>
    </motion.div>
  )
}

export default Header