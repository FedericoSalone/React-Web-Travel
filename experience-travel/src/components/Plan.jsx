import React from 'react'

const Plan = () => {
    return (
        <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            {/* Left Side */}
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/164284/pexels-photo-164284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/6604677/pexels-photo-6604677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/10105811/pexels-photo-10105811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
                <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/4076491/pexels-photo-4076491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/4011507/pexels-photo-4011507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
            {/* Right Side */}
            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
                <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eligendi.</p>
                <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repudiandae ut sint! Culpa itaque maiores eveniet, aliquam corrupti molestias tempora cum accusamus velit et quam, ipsa dolorem quis enim impedit.</p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
            </div>
            </div>
        </div>
    )
}

export default Plan