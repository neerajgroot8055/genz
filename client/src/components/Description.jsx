import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI images </h1>
        <p className='text-gray-500 mb-8'>Turn your imagination Into visuals  </p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src ={assets.sample_img_1} className='w-80 xl:w-96 rounded-lg'></img>
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the Ai powered Text to image generator </h2>
                <p className='text-gray-600 mb-4'>Easily bring your ideas to life  with your free AI image generator .
                    Whether you need stunning visuals or unique imagery,our tool can do it .Imagine it , describe it and you can have it .
                
                </p>
                <p className='text-gray-600 mb-4'>
                    Simply type in a text prompt , and our cutting edge Ai will generate 
                    high quality visuals describing what you have provided us as a prompt . 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Description