import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Subscribe = () => {
  return (
    <div className='flex flex-row justify-between w-full p-16 mt-8 items-center px-48'>
      <div className='flex flex-col w-[35%]'>
        <p className='text-lg opacity-80'>SUBSCRIBE</p>
        <p className='text-2xl font-bold text-red-500 opacity-80'>Sign up for Newsletter!</p>
      </div>
      <div className='border-b-2 w-full pb-2 flex flex-row justify-between w-[55%]'>
        <input placeholder='Enter your email' className='focus:outline-none text-xl'></input>
        <button className='flex flex-row items-center text-red-500 hover:text-black transition duration-400 ease-in-out'>
          SUBSCRIBE
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
