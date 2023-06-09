import React from 'react'

const Roms = () => {
    return (
        <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
            <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
                <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
                <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam sint veritatis eveniet, vel praesentium.</p>
            </div>

            <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className='object-cover w-full h-full' src="https://images.unsplash.com/photo-1668714298641-a221ceb27d0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="/" />
            <img className='row-span-2 object-cover w-full h-full' src="https://images.unsplash.com/photo-1668714298614-1f9c0f312ef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="/" />
            <img className='object-cover w-full h-full' src="https://images.unsplash.com/photo-1666376466576-44426a094712?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="/" />
            </div>
        </div>
    )
}

export default Roms