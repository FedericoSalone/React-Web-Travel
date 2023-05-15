import React from 'react'

const Hero = () => {
    return (
        <div className='w-full h-screen'>
            <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.pexels.com/photos/3727255/pexels-photo-3727255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <p>All inclusive</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Ex provident nulla voluptatem? Sequi
                    suscipit unde at quidem perspiciatis, culpa exercitationem.
                </p>
                <button className='bg-white text-black '>Reserve Now</button>
            </div>
        </div>
        </div>
    )
}

export default Hero