import React from 'react'
const Howit = () => {
  return (
    <div className='flex flex-col w-11/12 m-auto'>
      <p className='text-3xl font-bold px-3 py-1'>How It Work</p>
      <p className='text-xl opacity-70 px-3 py-1'>You can choose to display featured</p>
      <div className='bg-red-500 w-[5%] h-0.5 text-white text-1 mx-3 mt-1'> " s"</div>
      <div className='flex flex-row flex-wrap mx-36 my-16'>
      <div className='flex flex-col justify-center items-center w-1/3'>
        <img src='https://ovatheme.com/meup/wp-content/uploads/2019/06/feature_1.png' className='h-[70%] w-[25%] rounded-lg mb-10 hover:scale-125 transition duration-500 cursor-pointer' ></img>
        <p className='font-bold mb-3'>Choose What To Do</p>
        <p className='text-center opacity-80'>Easily find your event via search system with multiple params.</p>
      </div>
      <div className='flex flex-col justify-center items-center w-1/3'>
        <img src='https://ovatheme.com/meup/wp-content/uploads/2019/06/feature_2.png' className='h-[70%] w-[25%] rounded-lg mb-10 hover:scale-125 transition duration-500 cursor-pointer'></img>
        <p className='font-bold mb-3'>Booking event that you like</p>
        <p className='text-center opacity-80'>Choose Ticket add to cart. Support payment via Woocommerce system.</p>
      </div>
      <div className='flex flex-col justify-center items-center w-1/3'>
        <img src='https://ovatheme.com/meup/wp-content/uploads/2019/06/feature_3.png' className='h-[70%] w-[25%] rounded-lg mb-10 hover:scale-125 transition duration-500 cursor-pointer'></img>
        <p className='font-bold mb-3'>Get the ticket to attend</p>
        <p className='text-center opacity-80'>After booking successfully, You will get ticket in email or download in your account.</p>
      </div>

      </div>
    </div>
  )
}

export default Howit
